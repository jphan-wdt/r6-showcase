import styles from "../css/Hero.module.css"
import VideoPlayer from "./VideoPlayer"

export default function Hero() {
    return (   
    <div className={styles.Hero}>
        <div className={styles.textContainer}>
            <div className={styles.menu}>
                <button className={styles.menuItem}>Welcome</button>
                <button className={styles.menuItem}>Menu 1</button>
                <button className={styles.menuItem}>Menu 2</button>
                <button className={styles.menuItem}>Menu 3 </button>
                <button className={styles.menuItem}>Menu 4</button>
                <button className={styles.menuItem}>Menu 5</button>
            </div>
            <div className={styles.textRight}>
                <div className={styles.title}>Title</div>
                <br></br>
                <div className={styles.description}>Description</div>
            </div>

        </div>

        <VideoPlayer/>
    </div>
    );
}