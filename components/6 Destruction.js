import section from "../css/section.module.css"
import destruction from "../css/trailer.module.css"
import Image from "next/image";
import shieldLineup from "../public/wall-breach.webp"
import SlideUp from "./SlideUp";

export default function Destruction() {
    return(
        <div className={section.cardContainer}>
            <div className={destruction.banner}>
                

                <div className={destruction.textOverlay}>
                    <SlideUp className={destruction.mainText}>Endless tension.</SlideUp >
                    <SlideUp className={destruction.mainText}>Endless action.</SlideUp >
                </div>
            </div>
        </div>
    );
}