import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {Helmet} from "react-helmet";
import { useLocation } from "react-router-dom";
import { usePathname } from 'next/navigation';

const index = () => {
  
  const pathname = usePathname()
 
//  const capitalizedPathname = pathname.substring(1).charAt(0).toUpperCase() + pathname.substring(1).slice(1);


  return (
    <>
     <Helmet>
                <meta name="description" content="LUZO | Avail Premium Offers at salons and spas" />
                <title>{`luzo.app/${pathname.substring(1)}`}</title>
                {/* <base href='https://www.luzo.app' />  */}
              
      </Helmet>
    <Navbar />
    <div className='flex justify-center items-center h-screen'>
        <p className=' border-r-2 border-black h-10 flex items-center text-[20px] text- font-medium px-[10px]'>404  </p> 
        <span className='px-[10px]'><p>This Page Could Not Found </p>
        <Link to='/' className='text-[blue]'>Go To Home Page</Link></span>
    </div>
    <Footer />
    </>
  )
}

export default index