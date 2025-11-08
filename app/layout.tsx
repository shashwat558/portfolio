import type { Metadata } from "next";
import { Funnel_Display} from "next/font/google";
import "./globals.css";
import BackgroundAudio from "@/components/BackgroundAudio";
import { ThemeProvider } from "next-themes";
import Script from "next/script";

import { VisibleProvider } from "@/context/VisibleContext";

import { Analytics } from "@vercel/analytics/next"
import OnekoCat from "@/components/OnekoCat";
import Footer from "@/components/Footer";
import LiveCursor from "@/components/LiveCursor";

import AudioPlayer from "@/components/AudioPlayer";



const funnelDisplay = Funnel_Display({
  weight: "400",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Shashwat jain",
  description: "welcome to my the most clean and minimal portfolio website",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "shashwat jain",
    description: "welcome to my the most clean and minimal portfolio website",
    images: "/og-image.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "shashwat jain",
    description: "welcome to my the most clean and minimal portfolio website",
    images: "/og-image.png",
  },
  metadataBase: new URL("https://shashwatt.tech"),
  alternates: {
    canonical: "https://shashwatt.tech",
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Shashwat jain", url: "https://shashwatt.tech" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script src="https://unpkg.com/oneko@latest/oneko.min.js" strategy="afterInteractive" />
      <body
        className={`${funnelDisplay.className} antialiased bg-white dark:bg-[#000000] scroll-smooth`}
      >
        
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <BackgroundAudio src="/verdisquo.mp3" loop={true} volume={0.3}>
          <VisibleProvider>
            <LiveCursor />
            {children}
            <AudioPlayer songName="Veridis Quo - Daft Punk" />
            <Footer />
          </VisibleProvider>
          </BackgroundAudio>
        </ThemeProvider>
        
        <OnekoCat />
        <Analytics />
      </body>
    </html>
  );
}
