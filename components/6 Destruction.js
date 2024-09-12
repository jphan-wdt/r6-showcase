import section from "../css/section.module.css"
import trailer from "../css/trailer.module.css"
import SlideUp from "./SlideUp";

export default function Destruction() {
    return(
        <div className={section.cardContainer}>
            <div className={trailer.banner}>
                
                <div className={trailer.textOverlay}>
                    <div className={trailer.mainText}>Endless tension.</div >
                    <div className={trailer.mainText}>Endless action.</div >
                </div>
            </div>
        </div>
    );
}