import section from "../css/section.module.css"
import Image from 'next/image'
import picture from "../public/Basics.jpg"

export default function Basics() {
    return(
        <div className={section.cardContainer}>
            <div className={section.caption}>
                Engage in intense close-quarter combat.
                Every move matters, every second counts.
                Master the fundamentals and lead your team to victory.
            </div>
        </div>
    );
}