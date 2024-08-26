import page from "./page.module.css";
import Welcome from "@/components/1 Welcome";
import Explore from "@/components/2 Explore";
import Trailer from "@/components/3 Trailer";
import Basics from "@/components/4 Basics";
import Travel from "@/components/5 Travel";
import Destruction from "@/components/6 Destruction";
import Team from "@/components/7 Team";
import Gadgets from "@/components/8 Gadgets";

import SlideUp from "@/components/SlideUp";
import Navbar from "@/components/Navbar";

import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    
    <main className={page.mainContainer}>
      <SpeedInsights/>
      <Navbar/>
      <Welcome/>

      <SlideUp className={page.subHeader}>Explore</SlideUp>
      <SlideUp className={page.caption}>What&apos;s new</SlideUp>
      <Explore/>

      <Trailer/>

      <div id='basics' className={page.subHeader}>Learn the Basics</div>
      <Basics/>

      <div id='travel' className={page.subHeader}>Travel the World</div>
      <Travel/>

      <Destruction/>

      <div id='team' className={page.subHeader}>Meet Team Rainbow</div>
      <Team/>

      <div id='gadgets' className={page.subHeader}>Master Gadgetry</div>
      <Gadgets/>

    </main>
  );
}
