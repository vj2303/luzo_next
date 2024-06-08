import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';




const Carousel = () => {
     


  return (
    <div className="pt-[100px] px-[10px] items-center">
        <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    // navigation={{nextEl : ".next", prevEl : ".prev"}}
                    loop={true}
                    modules={[Autoplay,Navigation]}
                    autoplay={{
                        delay : 2000,
                        disableOnInteraction : false
                    }}
                    // autoplay={{ delay: 1000 }}
                    
                    breakpoints={{
                            // When window width is <= 640px (for mobile devices)
                            600: {
                                slidesPerView: 2.5,
                            },
                            
                        }}
                >
             
             <SwiperSlide>
                    <div className='flex  gap-[10px]'>
                        <img src="icons/1.png" alt="img"  width='650' className="rounded-2xl"/>                      
                    </div>
            </SwiperSlide>
            <SwiperSlide>
                    <div className='flex flex-row gap-[10px]'>
                        <img src="icons/2.png" alt="img"  width='650' className="rounded-2xl"/>
                    </div>
            </SwiperSlide>
                 <SwiperSlide>
                    <div className='flex flex-row gap-[10px]'>
                        <img src="icons/3.png" alt="img"  width='650' className="rounded-2xl"/>         
                    </div>
            </SwiperSlide>
            <SwiperSlide>
                    <div className='flex flex-row gap-[10px]'>
                        <img src="icons/4.png" alt="img"  width='650' className="rounded-2xl"/>         
                    </div>
            </SwiperSlide>
            <SwiperSlide>
                    <div className='flex flex-row gap-[10px]'>
                        <img src="icons/6.png" alt="img"  width='650' className="rounded-2xl"/>         
                    </div>
            </SwiperSlide>
            <SwiperSlide>
                    <div className='flex flex-row gap-[10px]'>
                        <img src="icons/7.png" alt="img"  width='650' className="rounded-2xl"/>         
                    </div>
            </SwiperSlide>
            <SwiperSlide>
                    <div className='flex flex-row gap-[10px]'>
                        <img src="icons/8.png" alt="img"  width='650' className="rounded-2xl"/>         
                    </div>
            </SwiperSlide>
            <SwiperSlide>
                    <div className='flex flex-row gap-[10px]'>
                        <img src="icons/9.png" alt="img"  width='650' className="rounded-2xl"/>         
                    </div>
            </SwiperSlide>
            <SwiperSlide>
                    <div className='flex flex-row gap-[10px]'>
                        <img src="icons/10.png" alt="img"  width='650' className="rounded-2xl"/>         
                    </div>
            </SwiperSlide>

        </Swiper>
    </div>
  )
}

export default Carousel