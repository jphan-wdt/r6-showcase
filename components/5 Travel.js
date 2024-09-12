'use client'

import section from "../css/section.module.css"
import scroll from "../css/travel.module.css"
import Image from "next/image"

import SlideUp from "./SlideUp"

import bank from "../public/maps-bank.webp"
import border from "../public/maps-border.webp"
import chalet from "../public/maps-chalet.webp"
import coastline from "../public/maps-coastline.webp"
import favela from "../public/maps-favela.webp"
import FadeIn from "./FadeIn"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Travel() {

    const cardData = [
        { 
            header: 'Ibiza, Spain',
            text: `Stationed on Ibiza’s rocky shore,
                    course through Balearic ruins and navigate
                    booming bars to neutralize the threat. Get
                    ready for a surround flow of combat laced with
                    chaotic rushes as you explore a paradise gone wrong.`,
            source: coastline         
        },

        { 
            header: 'Rio de Janeiro, Brazil',
            text: `Mixing colorful and narrow streets with high vantage points,
                    this map supports exterior shell destruction which renders it
                    as the most destructible to date. ` ,
            source: favela
        },

        { 
            header: 'Courchevel, France',
            text: `A shootout in an “après-ski” chalet in the French alps.
                    This area contrasts the warm, cozy mood of its interiors
                    with the cold, constrained visibility of its exteriors.` ,
            source: chalet
        },

        { 
            header: 'Nasib, Syria',
            text: `Team Rainbow has been called in to assist the local law enforcement
                and regain control of the border. A mix of old and new buildings with
                open air pathways make this the most destructible and open planned
                map to date. ` ,
            source: border
        },

        { 
            header: 'California, USA',
            text: `Team Rainbow has been called to raid a major bank.
                    The focus is on providing a sense of progression for attackers
                    as they make their way through progressively more fortified areas of the
                    building. ` ,
            source: bank
        }
    ]

    const scrollRef = useRef(null);
    
    const { scrollYProgress } = useScroll({
        target: scrollRef,
    })
    const x = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "-315vw"])

    return(
        <div className={scroll.scrollArea} ref={scrollRef}>

            <SlideUp className={scroll.sectionContainer}  >
        
                    <SlideUp className={section.caption}>
                        Attack and defend on the 25 maps in 20+ countries. From the
                        Spanish seashores of Ibiza, to the bustling Brazilian 
                        favelas and everything in between.
                    </SlideUp>


                    <motion.div className={scroll.scrollContainer} style={{ x }}>

                        {cardData.map((card, index) => (

                            <FadeIn key={index} className={scroll.scrollCard}>
                                <Image
                                    className={scroll.cardBackground}
                                    src={card.source}
                                />
                                <div className={scroll.gradientOverlay} />
                                <div className={scroll.textOverlay}>
                                    <div className={scroll.mainText}>{card.header}</div>
                                    <div className={scroll.subText}>{card.text}</div>
                                </div>
                            </FadeIn>

                        ))}

                    </motion.div>
                
            </SlideUp>
        </div>
    );
}