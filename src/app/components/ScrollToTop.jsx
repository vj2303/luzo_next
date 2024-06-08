import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname  = usePathname();

  function transformString(str) {
    // Replace "-" with a space
    let transformedStr = str.replace(/-/g, ' ');
  
    // Replace "and" with "&"
    transformedStr = transformedStr.replace(/\band\b/g, '&');
  
    // Capitalize the first letter of each word
    transformedStr = transformedStr.replace(/\b\w/g, char => char.toUpperCase());
  
    return transformedStr;
  }

  useEffect(() => {
    window.scrollTo(0, 0);

    // Customize the title based on the pathname
    // let title = 'Luzo'; // Default title
    // if (pathname === '/') {
    //   title = 'LUZO | Aail Offers at Premium Salons and Spas';
    // } else if (pathname === '/about') {
    //   title = 'About Us - LUZO';
    // }else if (pathname === '/giftcard'){
    //    title = 'Gift Card | LUZO'
    // }else if (pathname === '/contact') {
    //   title = 'Contact Us - LUZO';
    // } else if (pathname.startsWith("/salon")) {
    //   const salonName = pathname.split("/")[pathname.split("/").length - 1]
    //   const transformed = transformString(salonName)
    //   console.log({pathname, salonName});
    //   title = `${transformed} Salon | LUZO`;
    // } else {
    //   title = `${pathname.substring(1).charAt(0).toUpperCase()}${pathname.substring(1).slice(1)} - LUZO`;
    // }

    // document.title = title;
  }, [pathname]);

  return null;
}