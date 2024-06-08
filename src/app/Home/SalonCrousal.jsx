"use client"

import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import Link from "next/link"

const SalonCrousal = () => {
    return (
        <div className=' px-[10px] my-[30px] sm:my-[60px] 2xl:max-w-[1300px] xl:max-w-[1200px] lg:max-w-[1000px] sm:mx-auto'>
            <h1 className='font-bold text-[30px] text-[#051036]'>200+ Salons and Spas</h1>
            {/* <div> */}
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
                navigation={{ nextEl: ".next", prevEl: ".prev" }}
                loop={true}

                modules={[Autoplay, Navigation]}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}
                breakpoints={{
                    // When window width is <= 640px (for mobile devices)
                    400: {
                        slidesPerView: 4,
                    },
                }}
            >
                <SwiperSlide>
                    <div className='flex flex-col gap-[20px]'>
                        <Link href='/salon/tip-and-toe' > <img src="/img/salons/1.webp" alt='salon' className='aspect-video' /></Link>
                        <Link href='/salon/bblunt'><img src="/img/salons/2.webp" alt='salon' className='aspect-video' /></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col gap-[20px]'>
                        <Link href='/salon/juice'><img src="/img/salons/3.webp" alt='salon' className='aspect-video' /></Link>
                        <Link href='/salon/femina-flaunt'><img src="/img/salons/4.webp" alt='salon' className='aspect-video' /></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col gap-[20px]'>
                        <Link href='/salon/toni-and-guy'> <img src="/img/salons/5.webp" alt='salon' className='aspect-video' /></Link>
                        <Link href='/salon/tattva' ><img src="/img/salons/6.webp" alt='salon' className='aspect-video' /></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col gap-[20px]'>
                        <Link href='/salon/jcb'><img src="/img/salons/7.webp" alt='salon' className='aspect-video' /></Link>
                        <Link href='/salon/lookwell'> <img src="/img/salons/8.webp" alt='salon' className='aspect-video' /></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col gap-[20px]'>
                        <Link href='/salon/lemon'> <img src="/img/salons/9.webp" alt='salon' className='aspect-video' /></Link>
                        <Link href='/salon/bodycraft'> <img src="/img/salons/10.webp" alt='salon' className='aspect-video' /></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col gap-[20px]'>
                        <Link href='/salon/apple'> <img src="/img/salons/11.webp" alt='salon' className='aspect-video' /></Link>
                        <Link href='/salon/the-first'>  <img src="/img/salons/12.webp" alt='salon' className='aspect-video' />
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col gap-[20px]'>
                        <Link href='/salon/harsha-and-rakesh'> <img src="/img/salons/13.webp" alt='salon' className='aspect-video' /></Link>
                        <Link href='/salon/jco'><img src="/img/salons/14.webp" alt='salon' className='aspect-video' /></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col gap-[20px]'>
                        <Link href='/salon/fashiontv'> <img src="/img/salons/15.webp" alt='salon' className='aspect-video' /></Link>
                        <Link href='/salon/kprive'>  <img src="/img/salons/16.webp" alt='salon' className='aspect-video' /></Link>
                    </div>
                </SwiperSlide>


            </Swiper>

            {/* </div> */}
            <div className='flex justify-between  items-center sm:px-[20%] mt-[30px] sm:mt-0'>
                <button className='prev'><ChevronLeft /></button>
                <div className=' flex flex-row gap-[20px] sm:gap-[100px]'>

                    <p className='flex gap-[5px]'><img src="/img/pin.svg" height='20' width='20' />Banglore</p>
                    <p className='flex gap-[5px]'><img src="/img/pin.svg" height='20' width='20' />Mumbai</p>
                    <p className='flex gap-[5px]'><img src="/img/pin.svg" height='20' width='20' />Pune</p>
                </div>
                <button className='next '><ChevronRight /></button>
            </div>

        </div>
    )
}

export default SalonCrousal