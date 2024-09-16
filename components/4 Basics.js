'use client'

import { useState, useEffect } from "react"
import section from "../css/section.module.css"
import basics from "../css/basics.module.css"
import tabs from "../css/tabs.module.css"

import SlideUp from "./SlideUp"
import FadeIn from "./FadeIn"

import { motion, AnimatePresence, easeInOut } from "framer-motion"

export default function Basics() {

    const tabData = {
        tab1: [
            { header: 'Gameplay' },
            { 
                header: 'PVP',
                text: `The game features three main PVP gamemodes: Bomb, Hostage, Secure Area. Each 
                multiplayer gamemode is a 5v5, with players having four minutes in a round to complete the 
                respective objective. Players only have one life and a set amount of health. Matches are won 
                once at least three rounds have been won.` 
            },
            { 
                header: 'PVE',
                text: `The game also features two PVE gamemodes: Situations and Terrorist Hunt. The 
                Situations gamemode has ten tutorial missions that allow players to practice gameplay 
                concepts offline against bots and gain a better familiarity with the game. Terrorist Hunt 
                returns from past installments of the series, sharing many gamemodes with PVP. It also 
                features the "Classic" gamemode which tasks players with eliminating a set number of 
                terrorists based on difficulty who have fortified themselves on a map.` 
            },
            { 
                header: 'Matches',
                text: `Matches are conducted in a 5v5 manner, with each player only receiving one life per 
                round. As such, it is extremely important to communicate with teammates and plan assaults when
                 attacking or defense when defending. Attackers start each round with 45 seconds to send a 
                 Drone to survey and detect items in the environment, allowing players to find enemies and 
                 targets and mark them. Defenders, on the other hand, have the ability to fortify their 
                 location and prepare for the inevitable assault by the Attackers.` 
            },
            { 
                header: 'Operators',
                text: `Players may choose one Operator per round. Additionally, once an Operator is 
                chosen, it will be locked out from being chosen by other players. Attackers have the 
                option to change Operators during the Preparation Phase of a round.` 
            },
            { 
                header: 'Deployment',
                text: `Each map features multiple locations for both the Attackers and Defenders to choose 
                from, greatly increasing the importance in conducting surveillance. Each map is designed to 
                be close-quartered oriented, and have an emphasis on verticality and destruction.` 
            },
        ],
        tab2: [
            { header: 'Features' },
            { 
                header: 'Destruction',
                text: `The destruction system allows players to break structures by planting explosives on 
                them or to make bullet holes on walls by shooting it. The environments of the game feature a 
                layered material system, in which environmental objects of different materials show different 
                reactions to player's attack. Players may gain tactical advantages through environmental 
                destruction, and that the system aims at encouraging players to utilize creativity and 
                strategy. In order to create a realistic gameplay, a bullet penetration system is featured, 
                in which bullets deal less damage when they hit enemies through structures. This creates an 
                ever-changing environment on the map, making it vital for players to be aware of their 
                surroundings and work together.` 
            },
            { 
                header: 'Roles',
                text: `The game features a character-based system for multiplayer matches in the form of 
                Operators. There are two types of Operators: Attackers and 
                Defenders. As their name implies, Attacking and Defending Operators feature unique skills and 
                gadgets that are specialized for their respective role. This also applies to how much health 
                or running speed an Operator may have.` 
            },
            { 
                header: 'Arsenal',
                text: `Each Operator has access to one to three primary weapons, a secondary weapon, and 
                two gadgets. There are currently one hundred and three weapons and twenty-two gadgets. 
                Each weapon is unique to specific Operators. Weapon performance may be customized through the 
                use of weapon attachments.` 
            },
        ]
      };

    const [activeTab, setActiveTab] = useState(null);
    const [tabVisible, setTabVisible] = useState(false)

    const openTab = (tabIndex) => {
        setTabVisible(true)
        setActiveTab(tabData[tabIndex])
    }

    const closeTab = () => {
        setTabVisible(false)
    }

    useEffect(() => {
        if (tabVisible) {
            document.documentElement.classList.add('no-scroll');
        } else {
            document.documentElement.classList.remove('no-scroll');
        }
    }, [tabVisible]);

    return(
        <>
            <SlideUp className={section.sectionContainer}>
                <SlideUp className={section.caption}>
                    Engage in intense close-quarter combat.
                    Every move matters, every second counts.
                    Master the fundamentals and play your part in victory.
                </SlideUp>

                <SlideUp className={basics.flexContainer}>

                    <SlideUp className={basics.leftCol} onClick={() => openTab('tab1')}>
                        <video className={basics.flexBackground} autoPlay muted loop preload="metadata">
                            <source src={require('../public/0516-PrepComp.mp4')}/>
                            Your browser does not support the video tag.
                        </video>
                        <div className={basics.gradientOverlay} />
                        <div className={basics.textOverlay}>
                            <div>Gameplay</div>
                            <div className={basics.overlayBtn} />
                        </div>
                    </SlideUp>
            
                    <div className={basics.rightCol}  onClick={() => openTab('tab2')}>
                        <video className={basics.flexBackground} autoPlay muted loop preload="metadata">
                            <source src={require('../public/0516-Intro3.mp4')}/>
                            Your browser does not support the video tag.
                        </video>
                        <div className={basics.gradientOverlay} />
                        <div className={basics.textOverlay}>
                            <div>Features</div>
                            <div className={basics.overlayBtn} />
                        </div>
                    </div>

                </SlideUp>
            </SlideUp>

            
            <AnimatePresence>
                {tabVisible && (
                    <div className={tabs.tabContainer} >
                        <motion.div
                            className={tabs.tabBackground}
                            initial={{x: "100%"}}
                            animate={{x: 0}}
                            exit={{x: "100%"}}
                            transition={{ ease: easeInOut, duration: 0.5 }}
                        >
                                <div className={tabs.closeTab} onClick={closeTab} />
                                <div className={tabs.tabContentContainer}>

                                    {activeTab.map((row, index) => (

                                        <FadeIn key={index} delay={0.2} className={tabs.tabRow}>
                                            <div className={tabs.subHeader}>{row.header}</div>
                                            <div className={tabs.text}>{row.text}</div>
                                        </FadeIn>

                                    ))}

                                </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}