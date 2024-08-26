'use client'

import section from "../css/section.module.css"
import gadgets from "../css/gadgets.module.css"
import Image from "next/image";

import SlideUp from "./SlideUp";
import FadeIn from "./FadeIn";

import ash from "../public/gadget-ash.webp"
import mira from "../public/gadget-mira.webp"
import thatcher from "../public/gadget-thatcher.webp"
import twitch from "../public/gadget-twitch.webp"


export default function Gadgets() {

    const tabData = {
        topLeft:
            `A portable projectile breaching weapon. 
            Capable of breaching through doors without the need to focus on destroying hinges or locks for entry. 
            Unlike other explosive breaching methods, the M120 CREM is comparatively portable with its decreased size and weight, 
            allowing it to be carried as a secondary weapon.`
        ,
        
        topRight:
            `A specialized laminated glass, which when deployed with oxyacetylene can carve out a one-way mirror on any wall. 
            If the air pressure is disrupted, however, the glass is ejected and creates a daring opening for both defenders and attackers.`
        ,

        bottomLeft:
            `A localized fission reaction, while keeping gamma radiation to tolerable levels. 
            The EG MKO-EMP Grenade, a personal handheld device. The EMP is deceptively simple. 
            It's the grenade's impact that charges the electron particles. 
            That concentrated energy cascades across an area - even through walls - and spike nearby electronics.`
        ,
        bottomRight:
            `The Shock Drone can scout locations and deliver an electric shock via probes that can incapacitate electrical 
            devices and be used as a distraction toward hostiles. The chassis holds multiple shots.`
    }

    return(
        <SlideUp className={section.sectionContainer}>

            <SlideUp className={section.caption}>
                Tech meets tactics. Tools of the trade at your command. Unveil the gadgets that turn the tide of the battle.
            </SlideUp>

            <SlideUp className={gadgets.flexContainer}>

                <SlideUp className={gadgets.flexRow}>

                    <SlideUp className={gadgets.flexCard}>
                        <div className={gadgets.imageContainer}>
                            <Image
                                className={gadgets.picture}
                                src={ash}
                            />
                        </div>
                        <FadeIn className={gadgets.title}> M120 CREM </FadeIn>
                        <FadeIn className={gadgets.content}> {tabData.topLeft} </FadeIn>
                    </SlideUp>
                    
                    <SlideUp className={gadgets.flexCard}>
                        <div className={gadgets.imageContainer}>
                            <Image
                                className={gadgets.picture}
                                src={mira}
                            />
                        </div>
                        <FadeIn className={gadgets.title}> Black Mirror </FadeIn>
                        <FadeIn className={gadgets.content}> {tabData.topRight} </FadeIn>
                    </SlideUp>

                </SlideUp>

                <SlideUp className={gadgets.flexRow}>

                    <SlideUp className={gadgets.flexCard}>
                        <div className={gadgets.imageContainer}>
                            <Image
                                className={gadgets.picture}
                                src={twitch}
                            />
                        </div>
                        <FadeIn className={gadgets.title}>Shock Drone </FadeIn>
                        <FadeIn className={gadgets.content}> {tabData.bottomRight} </FadeIn>
                    </SlideUp>
                    
                    <SlideUp className={gadgets.flexCard}>
                        <div className={gadgets.imageContainer}>
                            <Image
                                className={gadgets.picture}
                                src={thatcher}
                            />
                        </div>
                        <FadeIn className={gadgets.title}>EG MKO-EMP </FadeIn>
                        <FadeIn className={gadgets.content}> {tabData.bottomLeft} </FadeIn>
                    </SlideUp>

                </SlideUp>
            
            </SlideUp>
        </SlideUp>
    );
}