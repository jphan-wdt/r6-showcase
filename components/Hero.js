import styles from "../css/Hero.module.css"
import VideoPlayer from "./VideoPlayer"

export default function Hero() {
    return (   
    <div className={styles.Hero}>
        <div className={styles.textContainer}>
            <div className={styles.menu}>
                <button className={styles.menuItem}>Welcome</button>
                <button className={styles.menuItem}>Learn the Basics</button>
                <button className={styles.menuItem}>Meet Team Rainbow</button>
                <button className={styles.menuItem}>Master Gadgetry</button>
                <button className={styles.menuItem}>Embrace Destruction</button>
                <button className={styles.menuItem}>Travel the World</button>
            </div>
            <div className={styles.textRight}>
                <div className={styles.title}>Strategic Precisionists</div>
                <br/>
                <br/>
                <div className={styles.description}>
                    Prepare, strategise, eliminate the most
                    formidable opponents in the world of Rainbow Six
                </div>
            </div>
        </div>

        <VideoPlayer/>
    </div>
    );
}