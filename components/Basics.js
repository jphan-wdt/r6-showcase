import section from "../css/section.module.css"
import basics from "../css/basics.module.css"
import Image from "next/image"

import ash from "../public/maps-bank.webp"


export default function Basics() {
    return(
        <div className={section.sectionContainer}>
            <div className={section.caption}>
                Engage in intense close-quarter combat.
                Every move matters, every second counts.
                Master the fundamentals and play your part in victory.
            </div>

            <div className={basics.flexContainer}>

                <div className={basics.leftCol}>
                    <Image
                        className={basics.flexBackground}
                        src={ash}
                    />
                    <div className={basics.gradientOverlay} />
                    <div className={basics.textOverlay}>
                        <div>Game 1</div>
                        <div className={basics.overlayBtn} />
                    </div>
                </div>
        
                <div className={basics.rightCol}>
                    <Image
                        className={basics.flexBackground}
                        src={ash}
                    />
                    <div className={basics.gradientOverlay} />
                    <div className={basics.textOverlay}>
                        <div>Game 2</div>
                        <div className={basics.overlayBtn} />
                    </div>
                </div>

            </div>
        </div>
    );
}