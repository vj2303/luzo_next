import DownloadLinks from '../components/DownloadLinks'

const AboutLuzo = () => {
  return (
      <div className="sm:px-[120px] px-[10px] py-[20px] flex flex-col max-w-[1500px] mx-auto">
        <h1 className="font-bold text-[30px] mb-[30px]">About Luzo</h1>
        <div className="flex lg:flex-row  flex-col lg:items-center justify-between sm:flex-wrap">
          
              <div className="lg:max-w-[40%] flex flex-col gap-[30px]  text-[16px] sm:leading-[30px] order-1 sm:basis-[60%]">
                <p className=""> LUZO is here to digitize and revolutionize your salon and spa experience! We know the bliss of enjoying a relaxing massage after a long week at work and the delight of gossiping with your bff over a plush manicure! And we would love to partake in these little joys of your life! When everything is available at the click of a button - from the prettiest dresses to the fanciest shoes, from your everyday groceries to your favourite food - why should the beauty and wellness industry be left behind? With this goal, we set out to create LUZO - your one-stop destination to browse through and book appointments at your preferred salons and spas. </p>
                <p className="">Our easy-to-use application allows you to peruse the wide range of services offered by the salons and spas in your vicinity and hand pick the ones you desire to avail.</p>
                <p>All you have to do is simply Add to Cart and Book Now, and voila! It's time to unwind at the spa and adorn at the salon - now at the touch of a button. So put those freshly manicured fingers to good use - book your next appointment through the LUZO app.</p>
              </div>
         
               <img src="/img/download.webp" className="rounded xl sm:py-none py-[20px] lg:max-w-[50%] order-3 " alt="img" width='636px' height='477px'/>
        {/* <div className="flex flex-row my-[30px] sm:flex-start justify-center gap-[10px] order-2 sm:order-4 ">
             <Link to='/loading'><img src="/img/appstore.webp" alt="img" width='150'/></Link>
              <Link to='/loading'><img src="/img/playstore.webp" alt="img" width='150'/></Link>
        </div> */}
        <DownloadLinks className={"my-[30px] sm:flex-start justify-center gap-[10px] order-2 sm:order-4"} />
        </div>

    </div>
  )
}

export default AboutLuzo