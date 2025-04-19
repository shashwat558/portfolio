import type { Metadata } from "next";
import { Funnel_Display} from "next/font/google";
import "./globals.css";
import { NavDock } from "@/components/NavDock";
import { ThemeProvider } from "@/components/theme-provider";


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
        <ThemeProvider attribute={"class"} defaultTheme="light" >
        <NavDock />
        {children}
        
        </ThemeProvider>
      </body>
    </html>
  );
}
