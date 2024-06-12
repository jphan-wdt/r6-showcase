import welcome from "../css/welcome.module.css"
import VideoPlayer from "./VideoPlayer"

export default function Welcome() {
    return (   
    <div className={welcome.Hero}>

        <VideoPlayer/>

        <div className={welcome.textOverlayContainer}>
            <div className={welcome.menu}>
                <button className={welcome.menuItem}>Welcome</button>
                <button className={welcome.menuItem}>Learn the Basics</button>
                <button className={welcome.menuItem}>Meet Team Rainbow</button>
                <button className={welcome.menuItem}>Master Gadgetry</button>
                <button className={welcome.menuItem}>Embrace Destruction</button>
                <button className={welcome.menuItem}>Travel the World</button>
            </div>
            <div className={welcome.rightCol}>
                <div className={welcome.title}>Strategic Perfection</div>
                <br/>
                <div className={welcome.description}>
                    Plan, prepare, execute. Face the most
                    formidable opponents in the world of Rainbow Six
                </div>

                <div className={welcome.ctaContainer}>
                    <div className={welcome.ctaButton}>Learn More + </div>
                    <div className={welcome.ctaButton}>Buy Now </div>
                </div>

            </div>
        </div>
    </div>
    );
}