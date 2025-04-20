
import Hero from "@/components/Hero";
import LifeUpdates from "@/components/LifeUpdates";
// import OpenSourceContributions from "@/components/OpenSource";
import OtherNav from "@/components/OtherNav";
import TechTags from "@/components/TechStack";




import Toaster from "@/components/Toaster";


export default function Home() {
  return (
   <>
    
    <Hero />
    <TechTags /> 
    <OtherNav />
    <LifeUpdates />
    {/* <OpenSourceContributions /> */}
    
    <Toaster />
    
   </>
  );
}
