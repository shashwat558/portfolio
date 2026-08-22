import type { Metadata } from "next";
import { Funnel_Display} from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import BackgroundAudio from "@/components/BackgroundAudio";
import { ThemeProvider } from "next-themes";

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

export const dynamic = "force-dynamic";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <html lang="en">
      <body
        className={`${funnelDisplay.className} antialiased bg-white dark:bg-[#000000] scroll-smooth`}
      >

        <ThemeProvider attribute="class" defaultTheme="light" enableSystem nonce={nonce}>
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
