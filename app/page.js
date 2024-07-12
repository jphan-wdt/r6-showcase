import page from "./page.module.css";
import Welcome from "@/components/1 Welcome";
import Explore from "@/components/2 Explore";
import Trailer from "@/components/3 Trailer";
import Basics from "@/components/4 Basics";
import Travel from "@/components/5 Travel";
import Team from "@/components/6 Team";
import Gadgets from "@/components/7 Gadgets";
import Destruction from "@/components/8 Destruction";

import SlideUp from "@/components/SlideUp";


export default function Home() {
  return (
    
    <main className={page.mainContainer}>
      <Welcome/>

      <SlideUp className={page.subHeader}>Explore</SlideUp>
      <SlideUp className={page.caption}>What's new</SlideUp>
      <Explore/>

      <Trailer/>

      <div className={page.subHeader}>Learn the Basics</div>
      <Basics/>

      <div className={page.subHeader}>Travel the World</div>
      <Travel/>

      <div className={page.subHeader}>Meet Team Rainbow</div>
      <Team/>

      <div className={page.subHeader}>Master Gadgetry</div>
      <Gadgets/>

      <div className={page.subHeader}>Embrace Destruction</div>
      <Destruction/>
      
    </main>
  );
}
