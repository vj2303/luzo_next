import { Link } from "react-router-dom"


const Salons = () => {
  return (
    <div className="px-[10px] sm:px-[120px] mt-[100px]">
      <h1 className="font-medium text-[30px]">All Salons</h1>
      <div className="flex flex-wrap   gap-[30px] cursor-pointer py-[20px]">
        <Link to='/salon/jcb' className={"sm:w-[30%]"}>
          <div className='flex flex-col gap-[20px]  relative rounded-xl overflow-hidden  '>
            <img src='/SalonPhotos/JCB.webp' alt='salon' className='aspect-video transform hover:scale-110 transition duration-300 ease-in-out' />
            <h1 className='text-white text-[26px] font-medium absolute bottom-0 left-0  px-4 py-2'>JCB (Jean-Claude Biguine )</h1>
          </div>
        </Link>

        <Link to='/salon/tattva' className={"sm:w-[30%]"}>
          <div className='flex flex-col gap-[20px]  relative rounded-xl overflow-hidden  '>
            <img src='/SalonPhotos/TattvaSpa.webp' alt='salon' className='aspect-video transform hover:scale-110 transition duration-300 ease-in-out' />
            <h1 className='text-white text-[26px] font-medium absolute bottom-0 left-0  px-4 py-2'>Tattva Spa</h1>
          </div>
        </Link>

        <Link to='/salon/juice' className={"sm:w-[30%]"}> 

          <div className='flex flex-col gap-[20px]  relative rounded-xl overflow-hidden  '>
            <img src='/SalonPhotos/juice,ghatkopar.webp' alt='salon' className='aspect-video  transform hover:scale-110 transition duration-300 ease-in-out' />
            <h1 className='text-white text-[26px] font-medium absolute bottom-0 left-0  px-4 py-2'>Juice</h1>
          </div>

        </Link>

        <Link to='/salon/harsha-rakesh' className={"sm:w-[30%]"}>
          <div className='flex flex-col gap-[20px]  relative rounded-xl overflow-hidden  '>
            <img src='/SalonPhotos/HarshaRakesh.webp' alt='salon' className='aspect-video transform hover:scale-110 transition duration-300 ease-in-out' />
            <h1 className='text-white text-[26px] font-medium absolute bottom-0 left-0  px-4 py-2'>Harsha & Rakesh</h1>
          </div>


        </Link>

        <Link to='/salon/the-first'  className={"sm:w-[30%]"}>
          <div className='flex flex-col gap-[20px]  relative rounded-xl overflow-hidden  '>
            <img src='/SalonPhotos/TheFirst.webp' alt='salon' className='aspect-video transform hover:scale-110 transition duration-300 ease-in-out' />
            <h1 className='text-white text-[26px] font-medium absolute bottom-0 left-0  px-4 py-2'>The First</h1>
          </div>

        </Link>

        <Link to='/salon/harsha-rakesh' className={"sm:w-[30%]"}>
          <div className='flex flex-col gap-[20px]  relative rounded-xl overflow-hidden  '>
            <img src='/SalonPhotos/HouseOfBumble.webp' alt='salon' className='aspect-video transform hover:scale-110 transition duration-300 ease-in-out' />
            <h1 className='text-white text-[26px] font-medium absolute bottom-0 left-0  px-4 py-2'>House of Bumble</h1>
          </div>

        </Link>

        <Link to='/salon/bodycraft' className={"sm:w-[30%]"}>
          <div className='flex flex-col gap-[20px]  relative rounded-xl overflow-hidden  '>
            <img src='/SalonPhotos/BodyCraft.webp' alt='salon' className='aspect-video transform hover:scale-110 transition duration-300 ease-in-out' />
            <h1 className='text-white text-[26px] font-medium absolute bottom-0 left-0  px-4 py-2'>BodyCraft</h1>
          </div>
        </Link>

        <Link to='/salon/cocomelon' className={"sm:w-[30%]"}>
          <div className='flex flex-col gap-[20px]  relative rounded-xl overflow-hidden  '>
            <img src='/SalonPhotos/Cocomelon.webp' alt='salon' className='aspect-video transform hover:scale-110 transition duration-300 ease-in-out' />
            <h1 className='text-white text-[26px] font-medium absolute bottom-0 left-0  px-4 py-2'>Cocomelon</h1>
          </div>
        </Link>

        <Link to='/salon/lookwell' className={"sm:w-[30%]"}>
          <div className='flex flex-col gap-[20px]  relative rounded-xl overflow-hidden  '>
            <img src='/SalonPhotos/LookWell.webp' alt='salon' className='aspect-video transform hover:scale-110 transition duration-300 ease-in-out' />
            <h1 className='text-white text-[26px] font-medium absolute bottom-0 left-0  px-4 py-2'>LookWell</h1>
          </div>

        </Link>

        <Link to='/salon/apple' className={"sm:w-[30%]"}>
          <div className='flex flex-col gap-[20px]  relative rounded-xl overflow-hidden  '>
            <img src='/SalonPhotos/Apple(The Original).webp' alt='salon' className='aspect-video transform hover:scale-110 transition duration-300 ease-in-out' />
            <h1 className='text-white text-[26px] font-medium absolute bottom-0 left-0  px-4 py-2'>Apple</h1>
          </div>

        </Link>

        <Link to='/salon/tip-and-toe' className={"sm:w-[30%]"}>
          <div className='flex flex-col gap-[20px]  relative rounded-xl overflow-hidden  '>
            <img src='/SalonPhotos/timntoe.webp' alt='salon' className='aspect-video transform hover:scale-110 transition duration-300 ease-in-out' />
            <h1 className='text-white text-[26px] font-medium absolute bottom-0 left-0  px-4 py-2'>Tip & Toe</h1>
          </div>

        </Link>

        <Link to='/salon/tattva' className={"sm:w-[30%]"}>
          <div className='flex flex-col gap-[20px]  relative rounded-xl overflow-hidden  '>
            <img src='/SalonPhotos/TattvaSpa.webp' alt='salon' className='aspect-video transform hover:scale-110 transition duration-300 ease-in-out' />
            <h1 className='text-white text-[26px] font-medium absolute bottom-0 left-0  px-4 py-2'>JCB (Jean-Claude Biguine )</h1>
          </div>

        </Link>

        <Link to='/salon/toni-and-guy' className={"sm:w-[30%]"}>
          <div className='flex flex-col gap-[20px]  relative rounded-xl overflow-hidden  '>
            <img src='/SalonPhotos/toninguy.webp' alt='salon' className='aspect-video transform hover:scale-110 transition duration-300 ease-in-out' />
            <h1 className='text-white text-[26px] font-medium absolute bottom-0 left-0  px-4 py-2'>Toni & Guy</h1>
          </div>

        </Link>
        <Link to='/salon/lemon' className={"sm:w-[30%]"}>
          <div className='flex flex-col gap-[20px]  relative rounded-xl overflow-hidden  '>
            <img src='/SalonPhotos/lemon.webp' alt='salon' className='aspect-video transform hover:scale-110 transition duration-300 ease-in-out' />
            <h1 className='text-white text-[26px] font-medium absolute bottom-0 left-0  px-4 py-2'>Lemon</h1>
          </div>

        </Link>

        <Link to='/salon/femina-flaunt' className={"sm:w-[30%]"}>
          <div className='flex flex-col gap-[20px]  relative rounded-xl overflow-hidden  '>
            <img src='/SalonPhotos/feminaflaunt.webp' alt='salon' className='aspect-video transform hover:scale-110 transition duration-300 ease-in-out' />
            <h1 className='text-white text-[26px] font-medium absolute bottom-0 left-0  px-4 py-2'>Femina Flaunt</h1>
          </div>

        </Link>

        <Link to='/salon/bblunt' className={"sm:w-[30%]"}>
          <div className='flex flex-col gap-[20px]  relative rounded-xl overflow-hidden  '>
            <img src='/SalonPhotos/bblunt.webp' alt='salon' className='aspect-video transform hover:scale-110 transition duration-300 ease-in-out' />
            <h1 className='text-white text-[26px] font-medium absolute bottom-0 left-0  px-4 py-2'>Bblunt</h1>
          </div>

        </Link>

        <Link to='/salon/kprive' className={"sm:w-[30%]"}>
          <div className='flex flex-col gap-[20px]  relative rounded-xl overflow-hidden  '>
            <img src='/SalonPhotos/Kprive.webp' alt='salon' className='aspect-video transform hover:scale-110 transition duration-300 ease-in-out' />
            <h1 className='text-white text-[26px] font-medium absolute bottom-0 left-0  px-4 py-2'>Kprive</h1>
          </div>
        </Link>
        <Link to='/salon/fashiontv' className={"sm:w-[30%]"}>
          <div className='flex flex-col gap-[20px]  relative rounded-xl overflow-hidden  '>
            <img src='/SalonPhotos/FTV.webp' alt='salon' className='aspect-video transform hover:scale-110 transition duration-300 ease-in-out' />
            <h1 className='text-white text-[26px] font-medium absolute bottom-0 left-0  px-4 py-2'>FTV</h1>
          </div>
        </Link>

      </div>
      <h1 className="font-medium sm:text-[28px] text-[20px] text-center">To view more salons download the app now!</h1>
      <div className="flex items-center   justify-center gap-[20px] py-[20px]">
        <img src="/img/appstore.webp" alt="img" width='150' />
        <img src="/img/playstore.webp" alt="img" width='150' />
      </div>
    </div>
  )
}

export default Salons