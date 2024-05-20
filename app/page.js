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

      {/* <div className={page.subtitle}>Explore</div> */}
      <Explore/>

      <Trailer/>

      <div className={page.subtitle}>Learn the Basics</div>
      <Basics/>

      <div className={page.subtitle}>Travel the World</div>
      <Travel/>

      <div className={page.subtitle}>Meet Team Rainbow</div>
      <Team/>

      <div className={page.subtitle}>Master Gadgetry</div>
      <Gadgets/>

      <div className={page.subtitle}>Embrace Destruction</div>
      <Destruction/>


    </main>
  );
}
