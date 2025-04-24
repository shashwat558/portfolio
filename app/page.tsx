"use client"

import Hero from "@/components/Hero";
import IntroAnimation from "@/components/IntroAnimation";
import LifeUpdates from "@/components/LifeUpdates";
import { NavDock } from "@/components/NavDock";
// import OpenSourceContributions from "@/components/OpenSource";
import OtherNav from "@/components/OtherNav";

import { SmoothScrollHero } from "@/components/SmoothScrollLenis";
import TechTags from "@/components/TechStack";




import Toaster from "@/components/Toaster";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";


export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2500);

    return () => clearTimeout(timer)
  },[]);

  return (
   <>
    <AnimatePresence>
      {showIntro && <IntroAnimation />}
    </AnimatePresence>
   {!showIntro && <>
    
    <NavDock />
    <Hero />
    <TechTags /> 
    <OtherNav />
    
    <LifeUpdates />
    {/* <OpenSourceContributions /> */}
    <SmoothScrollHero />
    
    <Toaster />
     </>
    }
    
   </>
  );
}
