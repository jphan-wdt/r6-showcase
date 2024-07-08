'use client'

import section from "../css/section.module.css"
import team from "../css/team.module.css"
import Image from "next/image";

import SlideUp from "./SlideUp";
import FadeIn from "./FadeIn";

import ash from "../public/profile-ash.webp"
import mira from "../public/profile-mira.webp"
import thatcher from "../public/profile-thatcher.webp"
import twitch from "../public/profile-twitch.webp"


export default function Team() {

    function handleClick() {
        
    }


    return(
        <SlideUp className={section.sectionContainer}>

            <SlideUp className={section.caption}>
                Meet 4 of the 71 playable operators from all hailing from one of
                the 32 CTUs in the game.
            </SlideUp>

            <SlideUp className={team.flexContainer}>

                <div className={team.flexCard}>
                    <Image
                        className={team.flexBackground}
                        src={ash}
                    />
                    <div className={team.gradientOverlay} />
                    <div className={team.textOverlay}>
                        <div>Ash</div>
                        <div className={team.overlayBtn} onClick={handleClick}/>
                    </div>

                </div>

                <SlideUp className={team.flexCard}>
                    <Image
                        className={team.flexBackground}
                        src={mira}
                    />
                    <div className={team.gradientOverlay} />
                    <div className={team.textOverlay}>
                        <div>Mira</div>
                        <div className={team.overlayBtn}/>
                    </div>

                </SlideUp>

                <div className={team.flexCard}>
                    <Image
                        className={team.flexBackground}
                        src={thatcher}
                    />
                    <div className={team.gradientOverlay} />
                    <div className={team.textOverlay}>
                        <div>Thatcher</div>
                        <div className={team.overlayBtn}/>
                    </div>

                </div>
                
                <SlideUp className={team.flexCard}>
                    <Image
                        className={team.flexBackground}
                        src={twitch}
                    />
                    <div className={team.gradientOverlay} />
                    <div className={team.textOverlay}>
                        <div>Twitch</div>
                        <div className={team.overlayBtn}/>
                    </div>

                </SlideUp>

            </SlideUp>
        </SlideUp>
    );
}