import type { Metadata } from "next";
import { Funnel_Display} from "next/font/google";
import "./globals.css";
import BackgroundAudio from "@/components/BackgroundAudio";
import { ThemeProvider } from "next-themes";
import Script from "next/script";

import { VisibleProvider } from "@/context/VisibleContext";

import { Analytics } from "@vercel/analytics/next"
import OnekoCat from "@/components/OnekoCat";
import PreloadBatman from "@/components/PreloadBatman";


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
    <html lang="en" suppressHydrationWarning>
      <Script
        id="preload-batman"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var link = document.createElement('link');
              link.rel = 'preload';
              link.href = '/batman4.png';
              link.as = 'image';
              link.fetchPriority = 'high';
              document.head.appendChild(link);
              var img = new Image();
              img.src = '/batman4.png';
              img.loading = 'eager';
            })();
          `,
        }}
      />
      <Script src="https://unpkg.com/oneko@latest/oneko.min.js" strategy="afterInteractive" />
      <body
        className={`${funnelDisplay.className} antialiased bg-white dark:bg-[#29211d] scroll-smooth`}
      >
        <PreloadBatman />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <BackgroundAudio src="/verdisquo.mp3" loop={true} volume={0.3}>
          <VisibleProvider>
            {children}
            
          </VisibleProvider>
          </BackgroundAudio>
        </ThemeProvider>
        
        <OnekoCat />
        <Analytics />
      </body>
    </html>
  );
}
