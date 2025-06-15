import About from "@/components/About/About";
import BestSellers from "@/components/BestSellers/BestSellers";
import Hero from "@/components/Hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <Hero/>
    <BestSellers/>
    <About/>
   </div>
  );
}
