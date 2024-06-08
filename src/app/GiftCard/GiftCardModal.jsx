import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { X } from "lucide-react"
import axios from 'axios'

const GiftCardModal = ({ intialInfo, handleCloseModal }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: intialInfo
    })
    useEffect(() => {
        reset(intialInfo)
    }, [intialInfo])

    const handleCreatePayment = async (data) => {
        try {
            // console.log(data);
            const res = await axios({
                method: "post",
                url: `${import.meta.env.VITE_SERVER_HOST}/api/salon-pro/create/order`,
                params: {
                    verify : import.meta.env.VITE_VERIFY,
                    amount: data.amount * 100,
                    currency: "INR"
                },
                headers: {
                    "Accept": "applocation/json",
                    "Content-Type": 'application/json'
                },
                // data: {
                //     name : data.name,
                //     number : data.number,
                //     amount : data.amount,
                //     description : data?.description,
                //     email : data?.receiverEmail
                // }
            })
            return res.data
        } catch (error) {
            alert("Something went wrong")
        }
    }


    const handle = async (data) => {
        const res = await handleCreatePayment(data)
        console.log({res});
        handleCloseModal()
        const options = {
            "key": import.meta.env.VITE_RAZOR_API_KEY, // Enter the Key ID generated from the Dashboard
            "amount": 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Acme Corp", //your business name
            "description": data?.description,
            "image": "https://example.com/your_logo",
            "order_id": res.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "handler": async function (response) {
                console.log({response});
                alert(response.razorpay_payment_id);
                alert(response.razorpay_order_id);
                alert(response.razorpay_signature)

                const det = await axios({
                    method: 'post',
                    url : `${import.meta.env.VITE_SERVER_HOST}/api/salon-pro/verify/payment`,
                    headers: {
                        "Accept": "applocation/json",
                        "Content-Type": 'application/json'
                    },
                    params: {
                        verify: import.meta.env.VITE_VERIFY,
                        orderId: res.data.id,
                        razorpayPaymentId: response.razorpay_payment_id,
                        razorpayOrderId: response.razorpay_order_id,
                        razorpaySignature: response.razorpay_signature,
                    }
                })
                // const verify = await det.json()
                console.log({ det });
                if (det.data.status === "success") {
                    const purchaseRes = await axios({
                        method: "post",
                        url: `${import.meta.env.VITE_SERVER_HOST}/api/v1/giftcard/purchase`,
                        headers: {
                            "Accept": "applocation/json",
                            "Content-Type": 'application/json'
                        },
                        params: {
                            buyerName : data.name,
                            buyerContact : data.number,
                            amount : data.amount,
                            recipientMessage : data?.description || "No message",
                            recipientContact : data?.receiverPhoneNumber,
                            recipientName : data?.receiverName,
                        }
                    })
                    if (purchaseRes.data.status === "success") {
                        alert("Payment success")
                    }
                    else { 
                        alert("Something went wrong")

                    }
                }
                else { 
                    alert("Something went wrong")

                }
            },
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
                "name": intialInfo?.receiverName, //your customer's name
                "email": intialInfo?.receiverEmail,
                "contact": intialInfo?.receiverPhoneNumber  //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.on('payment.failed', function (response) {
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
        });
        rzp1.open();
        e.preventDefault();
    }


    return (
        <form className='flex flex-col p-2 ' onSubmit={handleSubmit(handle)}>
            <div className='flex justify-between text-[18px] border-b-2 '>
                <p className='font-medium'>Confirm your details</p>
                <button className='bg-black rounded-full aspect-square w-[30px] flex justify-center items-center' type='button' onClick={handleCloseModal}><X color="#ffffff" /></button>

            </div>
            <label className="flex flex-col text-[16px]  py-2 gap-2 font-medium" htmlFor="name">
                Your Name
                <input type="text" placeholder="Enter Name" className="border px-[10px] rounded-[10px] py-[10px] text-gray-400" {...register("name", { required: "Please enter your name" })} />
                {errors.name && <span className="text-red-500">{errors.name.message}</span>}
            </label>
            <label className="flex flex-col py-2 gap-2 font-medium" htmlFor="number">
                Your Number
                <input type="text" id='number' min="0" placeholder="Enter Number" className="border w-[295px] sm:w-[442px] px-[10px] rounded-[10px] py-[10px] text-gray-400" {...register("number", { required: "Please enter your number", minLength: { value: 10, message: "Enter a valid number" }, maxLength: { value: 11, message: "Enter a valid number" } })} />
                {errors.number && <span className="text-red-500">{errors.number.message}</span>}
            </label>
            <label className="flex flex-col py-2 gap-2 font-medium" htmlFor="amount">
                Your Number
                <input type="number" id='amount' placeholder="Enter amount" className="border  w-[295px] sm:w-[442px] px-[10px] rounded-[10px] py-[10px] text-gray-400" {...register("amount", { required: "Value between 250 and 25000", min: { value: 250, message: "Value between 250 and 25000" }, max: { value: 25000, message: "Value between 250 and 25000" } })} />
                {errors.amount && <span className="text-red-500">{errors.amount.message}</span>}
            </label>
            {intialInfo.description && <label className="flex flex-col py-2 gap-2 font-medium" htmlFor="description">
                Description (Optional)
                <input type="text" placeholder="Prompt for yourself" id='description' className="border w-[295px]  sm:w-[442px] px-[10px] rounded-[10px] py-[10px] text-gray-400" {...register("description")} />
            </label>}
            <label className="flex flex-col py-2 gap-2 font-medium" htmlFor="receiverName">
                Receiver Name
                <input type="text" id='receiverName' placeholder="Receiver Name" className="border  sm:w-[442px] w-[295px] px-[10px] rounded-[10px] py-[10px] text-gray-400" {...register("receiverName", { required: "Please enter receiver name" })} />
                {errors.receiverName && <span className="text-red-500">{errors.receiverName.message}</span>}
            </label>
            <label className="flex flex-col py-2 gap-2 font-medium" htmlFor="receiverPhoneNumber">
                Receiver Contact Number
                <input type="number" id='receiverPhoneNumber' min="0" placeholder="Enter Receiver Number" className="border w-[295px] sm:w-[442px] px-[10px] rounded-[10px] py-[10px] text-gray-400" {...register("receiverPhoneNumber", { required: "Please enter reciever number", minLength: { value: 10, message: "Enter a valid number" }, maxLength: { value: 11, message: "Enter a valid number" } })} />
                {errors.receiverPhoneNumber && <span className="text-red-500">{errors.receiverPhoneNumber.message}</span>}
            </label>
            {intialInfo.receiverEmail && <label className="flex flex-col py-2 gap-2 font-medium" htmlFor="receiverEmail">
                Receiver Email (Optional)
                <input type="text" id='receiverEmail' min="0" placeholder="Enter Receiver Email" className="border w-[295px] sm:w-[442px] px-[10px] rounded-[10px] py-[10px] text-gray-400" {...register("receiverEmail", { required: "Please enter reciever number", validate: (val) => { return val.includes("@") ? true : "Enter a valid Email" } })} />
                {errors.receiverEmail && <span className="text-red-500">{errors.receiverEmail.message}</span>}
            </label>}
            <button className='border mt-[10px]  bg-[#42a5f5] text-[white] rounded-[10px] px-[20px] py-[10px]' type='submit'>Continue</button>
        </form>
    )
}

export default GiftCardModal