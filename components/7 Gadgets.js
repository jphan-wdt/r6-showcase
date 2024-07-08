'use client'

import section from "../css/section.module.css"
import gadgets from "../css/gadgets.module.css"
import Image from "next/image";

import SlideUp from "./SlideUp";
import FadeIn from "./FadeIn";

import ash from "../public/profile-ash.webp"
import mira from "../public/profile-mira.webp"
import thatcher from "../public/profile-thatcher.webp"
import twitch from "../public/profile-twitch.webp"


export default function Gadgets() {

    function handleClick() {
        
    }


    return(
        <SlideUp className={section.sectionContainer}>

            <SlideUp className={section.caption}>
                Gadgets
            </SlideUp>

            <SlideUp className={gadgets.flexContainer}>

                <SlideUp className={gadgets.flexCol}>

                    <SlideUp className={gadgets.flexCard}>
                        <div className={gadgets.imageContainer}>
                            <Image
                                className={gadgets.picture}
                                src={thatcher}
                            />
                        </div>
                        
                        
                        <FadeIn className={gadgets.content}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis neque vestibulum est lobortis, sit amet pharetra lorem dapibus. Quisque sit amet ultrices mi, ac consectetur mauris. Donec vel odio sem. Aenean et magna ex.
                        </FadeIn>
                    </SlideUp>
                    
                    <SlideUp className={gadgets.flexCard}>
                        <div className={gadgets.imageContainer}>
                            <Image
                                className={gadgets.picture}
                                src={thatcher}
                            />
                        </div>
                        
                        
                        <FadeIn className={gadgets.content}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis neque vestibulum est lobortis, sit amet pharetra lorem dapibus. Quisque sit amet ultrices mi, ac consectetur mauris. Donec vel odio sem. Aenean et magna ex.
                        </FadeIn>
                    </SlideUp>
                </SlideUp>
                
                <div className={gadgets.flexCol}>

                    <SlideUp className={gadgets.flexCard}>
                        <div className={gadgets.imageContainer}>
                            <Image
                                className={gadgets.picture}
                                src={thatcher}
                            />
                        </div>
                        
                        
                        <FadeIn className={gadgets.content}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis neque vestibulum est lobortis, sit amet pharetra lorem dapibus. Quisque sit amet ultrices mi, ac consectetur mauris. Donec vel odio sem. Aenean et magna ex.
                        </FadeIn>
                    </SlideUp>
                    
                    <div className={gadgets.flexCard}>
                        <div className={gadgets.imageContainer}>
                            <Image
                                className={gadgets.picture}
                                src={thatcher}
                            />
                        </div>
                        
                        
                        <FadeIn className={gadgets.content}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis neque vestibulum est lobortis, sit amet pharetra lorem dapibus. Quisque sit amet ultrices mi, ac consectetur mauris. Donec vel odio sem. Aenean et magna ex.
                        </FadeIn>
                    </div>
                </div>

            </SlideUp>
        </SlideUp>
    );
}