// "use client"

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://www.luzo.app'),
  title: 'LUZO | Avail Offers At Premium Salons and Spas',
  description: 'Best salons and spas • Trusted by 25,000+ customers • 40% OFF on your first appointment • Free booking • No cancellation fees • No pre-payment required',
  // other: {
  //   "facebook-domain-verification": "8pedts2d6xzp7soentdj3z6rlyep0z",
  // },
  openGraph: {
    // images: [posts.image,],
    title: `LUZO | Avail Offers At Premium Salons and Spas`,
    description: `Best salons and spas • Trusted by 25,000+ customers • 40% OFF on your first appointment • Free booking • No cancellation fees • No pre-payment required`,
    url: `https://luzo.app/`,
  },
  icons: {
    icon: '/appicon/favicon-32x32.png',
    apple: "/appicon/apple-touch-icon.png",
    shortcut: "/appicon/favicon-32x32.png",
    other: [{
      url: "/appicon/safari-pinned-tab.svg",
      type: "image/svg+xml",
      sizes: "any",
      rel: "mask-icon"
    },
    {
      url: "/appicon/favicon-16x16.png",
      type: "image/png",
      sizes: "16x16",
      rel: "icon"

    }, {
      url: "/appicon/favicon-32x32.png",
      type: "image/png",
      sizes: "32x32",
      rel: "icon"

    },
    {
      url: "/appicon/android-chrome-96x96.png",
      type: "image/png",
      sizes: "96x96",
      rel: "icon"

    },
    ]
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navbar />
      <body className={inter.className}>{children}</body>
      <Footer />
    </html>
  );
}
