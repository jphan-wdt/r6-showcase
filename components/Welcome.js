import welcome from "../css/welcome.module.css"
import VideoPlayer from "./VideoPlayer"

export default function Welcome() {
    return (   
    <div className={welcome.Hero}>
        <div className={welcome.textOverlayContainer}>
            <div className={welcome.menu}>
                <button className={welcome.menuItem}>Welcome</button>
                <button className={welcome.menuItem}>Learn the Basics</button>
                <button className={welcome.menuItem}>Meet Team Rainbow</button>
                <button className={welcome.menuItem}>Master Gadgetry</button>
                <button className={welcome.menuItem}>Embrace Destruction</button>
                <button className={welcome.menuItem}>Travel the World</button>
            </div>
            <div className={welcome.textRight}>
                <div className={welcome.title}>Strategic Perfection</div>
                <br/>
                <br/>
                <div className={welcome.description}>
                    Prepare, strategise, execute. Face the most
                    formidable opponents in the world of Rainbow Six
                </div>

                <div>Learn More + </div>
            </div>
        </div>

        <VideoPlayer/>
    </div>
    );
}