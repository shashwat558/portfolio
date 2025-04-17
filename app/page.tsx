
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import SendMessageComponent from "@/components/SendMessageComponent";



import Toaster from "@/components/Toaster";

export default function Home() {
  return (
   <>
    <Hero />
    
    <Experience />
    <Projects />
    <SendMessageComponent />
    <Toaster />
    
   </>
  );
}
