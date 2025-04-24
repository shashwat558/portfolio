import type { Metadata } from "next";
import { Funnel_Display} from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import PageProgress from "@/components/PageProgress";


const funnelDisplay = Funnel_Display({
  weight: "400",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Shashwat's Portfolio",
  description: "This is Shashwat jain's professional portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${funnelDisplay.className} antialiased bg-amber-50 dark:bg-[#29211d]`}
      >
        <PageProgress />
        <ThemeProvider attribute={"class"} defaultTheme="light" >
        
        {children}
        
        </ThemeProvider>
      </body>
    </html>
  );
}
