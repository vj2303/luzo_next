
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
// import Contact from "./Contact"
import ContactUsForm from "./ContactUsForm"
import { useState } from "react"
import { Link } from "react-router-dom"
import { X } from 'lucide-react'
import {Helmet} from "react-helmet";


const index = () => {
  const [showDownload, setShowDownload] = useState(true)

  return (
    <div>
        <Helmet>
                <meta name="description" content="Contact Us | LUZO" />
                <title>Contact Us | LUZO</title>
                {/* <base href='https://www.luzo.app' />  */}
              
      </Helmet>
        <Navbar />
        <ContactUsForm />
        <Footer />
        <div className={`bg-black w-full fixed bottom-[1%] z-20 text-white flex items-center justify-between gap-[2px] py-4 px-2 ${showDownload?"visible":"invisible"} transition sm:hidden`}>
        <button onClick={()=>setShowDownload(false)}><X/></button>
        <img src="/img/icon.webp" alt="logo" className='w-[20px] aspect-square' />
        <p className='whitespace-nowrap text-[13px]'>Download and book the luzo</p>
        <button className='bg-blue-300 rounded-md p-2'><Link to={"/loading"}>DownLoad</Link></button>
        </div>
    </div>
  )
}

export default index