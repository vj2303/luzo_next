
import SalonCrousal from './SalonCrousal'
import PopularSalonsCrousal from './PopularSalonsCrousal'
import Footer from '../components/Footer'
import Discount from './Discount'
import Trust from './Trust'
import Testimonial from './Testimonial'
import Navbar from '../components/Navbar'
import HeaderCrousal from './HeaderCrousal'
import Banner from './Banner'
import HowToUse from './HowToUse'
import { X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {Helmet} from "react-helmet";

const home = () => {

  const [showDownload, setShowDownload] = useState(true)

  return (
    <div >
      <Helmet>
                <meta name="description" content="LUZO | Avail Premium Offers at salons and spas" />
                <title>LUZO | Avail Premium Offers at salons and spas</title>
                {/* <base href='https://www.luzo.app' />  */}
              
      </Helmet>

      <Navbar />
      <HeaderCrousal />
      <SalonCrousal />
      <Discount />
      <HowToUse />
      <PopularSalonsCrousal />
      <Trust />
      <Testimonial />
      <Banner />
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

export default home




