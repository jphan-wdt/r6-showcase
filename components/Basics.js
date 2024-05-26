import section from "../css/section.module.css"
import VideoPlayer from "./VideoPlayer";
import Image from "next/image"


export default function Basics() {
    return(
        <div className={section.sectionContainer}>
            <div className={section.caption}>
                Engage in intense close-quarter combat.
                Every move matters, every second counts.
                Master the fundamentals and play your part in victory.
            </div>
        </div>
    );
}