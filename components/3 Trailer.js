'use client';

import trailer from "../css/trailer.module.css"
import shieldLineup from "../public/shield-lineup.jpg"
import SlideUp from "./SlideUp";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Trailer(){

    return(
        <div className={trailer.cardContainer}>

            <motion.div
                className={trailer.banner}
                
            >
                <Image
                    className={trailer.image}
                    src={shieldLineup}
                    fill
                />

                <div className={trailer.textOverlay}>
                    <SlideUp className={trailer.mainText}>Breach. Attack.</SlideUp >
                    <SlideUp className={trailer.mainText}>Defend. Secure.</SlideUp >
                    <SlideUp className={trailer.subText}>
                        Discover an elite, tactical shooter where
                        superior planning and flawless execution
                        reigns supreme
                    </SlideUp >
                </div>
            </motion.div>

            <iframe
                src="https://www.youtube.com/embed/RPY3TQSolm4?si=AfNnePVL95ZvncDB"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen>
            </iframe>
        </div>
    );
}