import Link from "next/link"
import DownloadLinks from "./DownloadLinks"

const Footer = () => {
  return (
    <div className="bg-[#3554D1] bg-opacity-5">
      <div className="sm:px-[120px] px-[10px] gap-[30px] pb-[100px] flex flex-col sm:flex-row justify-between   py-[20px] border-t max-w-[1400px] mx-auhref ">
        <ul className="flex flex-col gap-[20px]">
          <h1 className="text-[16px] font-semibold ">Pages</h1>
          <Link href='/about'> <li>About Us</li></Link>
          <Link href='/contact'> <li>Get In hrefuch</li></Link>
          <Link href='/privacy'><li>Privacy Policy</li></Link>
          <Link href='/terms'><li>Terms of Service</li></Link>
        </ul>
        <ul className="flex flex-col gap-[20px]">
          <h1 className="text-[16px] font-semibold">Social</h1>
          <Link target="_blank" href='https://www.instagram.com/accounts/suspended/?next=https%3A%2F%2Finstagram.com%2Fluzo.app%3Figshid%3DYmMyMTA2M2Y%253D%26__coig_ufac%3D1'>
            <li className="flex items-center gap-[10px]"><img src="/img/instagram.svg" width='25' alt="instagram" />Instagram</li>
          </Link>
          <Link target="_blank" href='https://www.linkedin.com/company/salonsurf/posts/?feedView=all'>
            <li className="flex items-center gap-[10px]"><img src="/img/linkedin.svg" width='25' alt="instagram" />linkedin</li>

          </Link>
          <Link target="_blank" href='https://www.facebook.com/luzoapp/'>
            <li className="flex items-center gap-[10px]"><img src="/img/facebook.svg" width='25' alt="instagram" />Facebook</li>

          </Link>
          <Link target="_blank" href='https://www.youtube.com/channel/UCKOrqE0xVXIdgw1S50gq_vg'>
            <li className="flex items-center gap-[10px]"><img src="/img/youtube.svg" width='25' alt="instagram" />Youtube</li>

          </Link>

          <Link target="_blank" href='https://x.com/luzo_app?s=11&t=W_nfHtVga_uF3WIz70N1sg&mx=2'>
            <li className="flex items-center gap-[10px]"><img src="/img/twitter.svg" width='25' alt="instagram" />Twitter</li>

          </Link>




        </ul>
        <ul className="flex flex-col gap-[20px]">
          <h1 className="text-[16px] font-semibold">Contact us</h1>
          <Link target="_blank" href='https://api.whatsapp.com/send?phone=917738182493'>  <li>WhatsApp</li></Link>
          <Link target="_blank" href='mailhref:info@luzo.app'>   <li className="">Email</li></Link>
          {/* <div className="flex flex-col gap-[10px] sm:hidden">
            <Link href='/loading'><img src="/img/appshrefre.webp" alt="img" width='150' /></Link>
            <Link href='/loading'><img src="/img/playshrefre.webp" alt="img" width='150' /></Link>
          </div>
          <div className="sm:flex flex-col gap-[10px] hidden">
            <Link target="_blank" href='https://apps.apple.com/in/app/luzo-luxury-you-aspire/id1594592604'><img src="/img/appshrefre.webp" alt="img" width='150' /></Link>
            <Link target="_blank" href='https://play.google.com/shrefre/apps/details?id=com.salon_surf&pli=1'><img src="/img/playshrefre.webp" alt="img" width='150' /></Link>
          </div> */}
          <DownloadLinks className={"flex-col"} />
        </ul>
      </div>
    </div>
  )
}

export default Footer