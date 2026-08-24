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
  metadataBase: new URL("https://sshwt.me"),
  alternates: {
    canonical: "https://sshwt.me",
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shashwat Jain",
    url: "https://sshwt.me",
    description: "Full-stack developer building AI-powered web applications with Next.js, TypeScript, Python, Redis, and PostgreSQL.",
    jobTitle: "Full Stack Developer",
    email: "shashwatjain558@gmail.com",
    sameAs: [
      "https://github.com/shashwat558",
      "https://x.com/shashwt558",
    ],
    knowsAbout: [
      "Next.js", "TypeScript", "Python", "Redis", "PostgreSQL",
      "LangChain", "OpenAI", "Supabase", "FastAPI",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          nonce={nonce}
        />
      </head>
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
