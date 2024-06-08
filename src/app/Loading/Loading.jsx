import Link from "next/link"

import React, { useEffect, useState } from 'react'
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

const Loading = () => {
  const pathname = usePathname
  const router = useRouter()
  const [device, setDevice] = useState('');

  // useEffect(() => {
  //   console.log({ isWindows, isAndroid, isIOS, isMobile });
  //   if (isWindows) {
  //     setInterval(() => {
  //       navigate("/")
  //     }, 8000);
  //   }
  //   if (isAndroid) {
  //     setInterval(() => {
  //       navigate("https://play.google.com/store/apps/details?id=com.salon_surf" + (pathname.toString() == "" ? "" : "&") + pathname.toString())
  //     }
  //       , 1500);
  //   }
  //   if (isIOS) {
  //     setInterval(() => {
  //       navigate("https://apps.apple.com/in/app/salonsurf/id1594592604" + (pathname.toString() == "" ? "" : "?") + pathname.toString())
  //     }
  //       , 1500);
  //   }
  // }, []);

  useEffect(() => {


    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const platform = navigator.platform;

    console.log({ userAgent });
    // Function to determine the OS
    const detectOS = () => {
      // Check for Windows
      if (/Win/.test(platform)) {
        setInterval(() => {
          router.push("/")
        }, 8000);
        return 'Windows';
      }

      // Check for macOS (iOS devices can sometimes return MacIntel)
      if (/Mac/.test(platform) && /iPhone|iPad|iPod/.test(userAgent)) {
        return 'iOS';
      } else if (/Mac/.test(platform)) {
        return 'Mac';
      }

      // Check for Android
      if (/Android/.test(userAgent)) {
        setInterval(() => {
          window.location.assign("https://play.google.com/store/apps/details?id=com.salon_surf" + "&")
        }
          , 1500);
        return 'Android';
      }

      // Check for iOS (if platform didn't cover it)
      if (/iPhone|iPad|iPod/.test(userAgent) && !window.MSStream) {
        setInterval(() => {
                window.location.assign("https://apps.apple.com/in/app/salonsurf/id1594592604" + "?")
              }
                , 1500);
        return 'iOS';
      }

      // Default to unknown
      return 'unknown';
    };

    setDevice(detectOS());

  }, []);

  if (device === "Android") {
    return <div className='flex flex-col justify-center items-center px-4 py-4 sm:pt-[30vh] h-screen'>
      <img src='/img/icon.webp' alt='logo' height={50} width={50} />
      <h1 className='text-[30px]'>LUZO</h1>
      <p className='text-[16px]'>Book your appointment at 200+ salons and spas with exclusive offers via LUZO</p>
      <p className='text-[16px]'>Redirecting</p>
      <div className='flex flex-row gap-[10px] pt-[10px] cursor-pointer'>
        {/* <Link target="_blank" to='https://apps.apple.com/in/app/luzo-luxury-you-aspire/id1594592604'><img src='/img/appstore.webp' alt='app store' width={150} /></Link> */}
        <Link target="_blank" to='https://play.google.com/store/apps/details?id=com.salon_surf&pli=1'><img src='/img/playstore.webp' alt='playstore' width={150} /></Link>
      </div>
    </div>
  }
  if (device === "iOS") {
    return <div className='flex flex-col justify-center items-center px-4 py-4 sm:pt-[30vh] h-screen'>
      <img src='/img/icon.webp' alt='logo' height={50} width={50} />
      <h1 className='text-[30px]'>LUZO</h1>
      <p className='text-[16px]'>Book your appointment at 200+ salons and spas with exclusive offers via LUZO</p>
      <p className='text-[16px] font-semibold'>Redirecting...</p>
      <div className='flex flex-row gap-[10px] pt-[10px] cursor-pointer'>
        <Link target="_blank" to='https://apps.apple.com/in/app/luzo-luxury-you-aspire/id1594592604'><img src='/img/appstore.webp' alt='app store' width={150} /></Link>
        {/* <Link target="_blank" to='https://play.google.com/store/apps/details?id=com.salon_surf&pli=1'><img src='/img/playstore.webp' alt='playstore' width={150} /></Link> */}
      </div>
    </div>
  }


  return (
    <div className='flex flex-col justify-center items-center px-4 py-4 sm:pt-[30vh] h-screen'>
      <img src='/img/icon.webp' alt='logo' height={50} width={50} />
      <h1 className='text-[30px]'>LUZO</h1>
      <p className='text-[16px]'>Book your appointment at 200+ salons and spas with exclusive offers via LUZO</p>
      <div className='flex flex-row gap-[10px] pt-[10px] cursor-pointer'>
        <Link target="_blank" to='https://apps.apple.com/in/app/luzo-luxury-you-aspire/id1594592604'><img src='/img/appstore.webp' alt='app store' width={150} /></Link>
        <Link target="_blank" to='https://play.google.com/store/apps/details?id=com.salon_surf&pli=1'><img src='/img/playstore.webp' alt='playstore' width={150} /></Link>
      </div>
    </div>
  )
}

export default Loading