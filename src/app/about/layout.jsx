// "use client"

import { Inter } from "next/font/google";
// import "@/app/global.css";
import Navbar from "@/app/components/Navbar";
// import Footer from "@/app/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    metadataBase: new URL('https://www.luzo.app'),

    title: 'About Us | LUZO',
    description: 'About Us | LUZO',
}

export default function AboutLayout({ children }) {
  return (
    <html lang="en">
      <Navbar />
      <body className={inter.className}>{children}</body>
      {/* <Footer /> */}
    </html>
  );
}
