import page from "./page.module.css";
import Welcome from "@/components/Welcome";
import Explore from "@/components/Explore";
import Trailer from "@/components/Trailer";
import Basics from "@/components/Basics";
import Team from "@/components/Team";
import Gadgets from "@/components/Gadgets";
import Destruction from "@/components/Destruction";
import Travel from "@/components/Travel";

export default function Home() {
  return (
    
    <main className={page.mainContainer}>
      {/* <div className={page.scrollwatcher}/> */}
      <Welcome/>

      <div className={page.subHeader}>Explore</div>
      <div className={page.caption}>What's new</div>
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
