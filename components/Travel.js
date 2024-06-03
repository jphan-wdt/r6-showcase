import section from "../css/section.module.css"
import scroll from "../css/travel.module.css"
import Image from "next/image"

import bank from "../public/maps-bank.webp"
import border from "../public/maps-border.webp"
import chalet from "../public/maps-chalet.webp"
import coastline from "../public/maps-coastline.webp"
import favela from "../public/maps-favela.webp"

export default function Travel() {
    return(
        <div className={section.sectionContainer}>
    
                <div className={section.caption}>
                    Attack and defend on the 25 maps in 20+ countries. From the
                    Spanish seashores of Ibiza, to the bustling Brazilian 
                    favelas and everything in between.
                </div>


                <div className={scroll.scrollContainer}>

                    <div className={scroll.scrollCard}>
                        <Image
                            className={scroll.cardBackground}
                            src={coastline}
                        />
                        <div className={scroll.gradientOverlay} />
                        <div className={scroll.textOverlay}>
                            <div className={scroll.mainText}>Ibiza, Spain</div>
                            <div className={scroll.subText}>
                                Stationed on Ibiza’s rocky shore,
                                course through Balearic ruins and navigate
                                booming bars to neutralize the threat. Get
                                ready for a surround flow of combat laced with
                                chaotic rushes as you explore a paradise gone wrong. </div>
                        </div>
                    </div>

                    <div className={scroll.scrollCard}>
                        <Image
                            className={scroll.cardBackground}
                            src={favela} 
                        />
                        <div className={scroll.gradientOverlay} />
                        <div className={scroll.textOverlay}>
                            <div className={scroll.mainText}>Rio de Janeiro, Brazil</div>
                            <div className={scroll.subText}>
                                Mixing colorful and narrow streets with high vantage points,
                                this map supports exterior shell destruction which renders it
                                as the most destructible to date. </div>
                        </div>
                    </div>

                    <div className={scroll.scrollCard}>
                        <Image
                            className={scroll.cardBackground}
                            src={chalet} 
                        />
                        <div className={scroll.gradientOverlay} />
                        <div className={scroll.textOverlay}>
                            <div className={scroll.mainText}>Courchevel, France</div>
                            <div className={scroll.subText}>
                                A shootout in an “après-ski” chalet in the French alps.
                                This area contrasts the warm, cozy mood of its interiors
                                with the cold, constrained visibility of its exteriors. </div>
                        </div>
                    </div>

                    <div className={scroll.scrollCard}>
                        <Image
                            className={scroll.cardBackground}
                            src={border} 
                        />
                        <div className={scroll.gradientOverlay} />
                        <div className={scroll.textOverlay}>
                            <div className={scroll.mainText}>Nasib, Syria</div>
                            <div className={scroll.subText}>
                                Team Rainbow has been called in to assist the local law enforcement
                                and regain control of the border. A mix of old and new buildings with
                                open air pathways make this the most destructible and open planned
                                map to date. </div>
                        </div>
                    </div>

                    <div className={scroll.scrollCard}>
                        <Image
                            className={scroll.cardBackground}
                            src={bank} 
                        />
                        <div className={scroll.gradientOverlay} />
                        <div className={scroll.textOverlay}>
                            <div className={scroll.mainText}>California, USA</div>
                            <div className={scroll.subText}>
                                Team Rainbow has been called to raid a major bank.
                                The focus is on providing a sense of progression for attackers
                                as they make their way through progressively more fortified areas of the
                                building. </div>
                        </div>
                    </div>

                </div>
            
        </div>
        
    );
}