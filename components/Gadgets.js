'use client'

import section from "../css/section.module.css"
import gadgets from "../css/gadgets.module.css"
import Image from "next/image";

import ash from "../public/profile-ash.webp"
import mira from "../public/profile-mira.webp"
import thatcher from "../public/profile-thatcher.webp"
import twitch from "../public/profile-twitch.webp"


export default function Gadgets() {

    function handleClick() {
        
    }


    return(
        <div className={section.sectionContainer}>

            <div className={section.caption}>
                Gadgets
            </div>

            <div className={gadgets.flexContainer}>

                <div className={gadgets.flexCol}>

                    <div className={gadgets.flexCard}>
                        <div className={gadgets.imageContainer}>
                            <Image
                                className={gadgets.picture}
                                src={thatcher}
                            />
                        </div>
                        
                        
                        <div className={gadgets.content}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis neque vestibulum est lobortis, sit amet pharetra lorem dapibus. Quisque sit amet ultrices mi, ac consectetur mauris. Donec vel odio sem. Aenean et magna ex.
                        </div>
                    </div>
                    
                    <div className={gadgets.flexCard}>
                        <div className={gadgets.imageContainer}>
                            <Image
                                className={gadgets.picture}
                                src={thatcher}
                            />
                        </div>
                        
                        
                        <div className={gadgets.content}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis neque vestibulum est lobortis, sit amet pharetra lorem dapibus. Quisque sit amet ultrices mi, ac consectetur mauris. Donec vel odio sem. Aenean et magna ex.
                        </div>
                    </div>
                </div>
                
                <div className={gadgets.flexCol}>

                    <div className={gadgets.flexCard}>
                        <div className={gadgets.imageContainer}>
                            <Image
                                className={gadgets.picture}
                                src={thatcher}
                            />
                        </div>
                        
                        
                        <div className={gadgets.content}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis neque vestibulum est lobortis, sit amet pharetra lorem dapibus. Quisque sit amet ultrices mi, ac consectetur mauris. Donec vel odio sem. Aenean et magna ex.
                        </div>
                    </div>
                    
                    <div className={gadgets.flexCard}>
                        <div className={gadgets.imageContainer}>
                            <Image
                                className={gadgets.picture}
                                src={thatcher}
                            />
                        </div>
                        
                        
                        <div className={gadgets.content}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis neque vestibulum est lobortis, sit amet pharetra lorem dapibus. Quisque sit amet ultrices mi, ac consectetur mauris. Donec vel odio sem. Aenean et magna ex.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}