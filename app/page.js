import styles from "./page.module.css";
import Welcome from "@/components/Welcome";
import Explore from "@/components/Explore";
import Basics from "@/components/Basics";
import Team from "@/components/Team";
import Gadgets from "@/components/Gadgets";
import Destruction from "@/components/Destruction";
import Travel from "@/components/Travel";


export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <Welcome/>
      <div className={styles.subtitle}>Explore</div>
      <Explore/>
      <div className={styles.subtitle}>Learn the Basics</div>
      <Basics/>
      <div className={styles.subtitle}>Meet Team Rainbow</div>
      <Team/>
      <div className={styles.subtitle}>Mastery Gadgetry</div>
      <Gadgets/>
      <div className={styles.subtitle}>Embrace Destruction</div>
      <Destruction/>
      <div className={styles.subtitle}>Travel the World</div>
      <Travel/>
    </main>
  );
}
