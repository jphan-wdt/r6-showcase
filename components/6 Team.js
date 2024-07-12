'use client'

import { useState, useEffect } from "react"
import { motion, AnimatePresence, easeInOut } from "framer-motion"
import section from "../css/section.module.css"
import team from "../css/team.module.css"
import tabs from "../css/tabs.module.css"
import Image from "next/image";

import SlideUp from "./SlideUp";
import FadeIn from "./FadeIn";

import ash from "../public/profile-ash.webp"
import mira from "../public/profile-mira.webp"
import thatcher from "../public/profile-thatcher.webp"
import twitch from "../public/profile-twitch.webp"


export default function Team() {

    const [tab1Visible, setTab1Visible] = useState(false);
    const [tab2Visible, setTab2Visible] = useState(false);
    const [tab3Visible, setTab3Visible] = useState(false);
    const [tab4Visible, setTab4Visible] = useState(false);

    const toggleTab1 = () => { setTab1Visible(!tab1Visible) }
    const toggleTab2 = () => { setTab2Visible(!tab2Visible) }
    const toggleTab3 = () => { setTab3Visible(!tab3Visible) }
    const toggleTab4 = () => { setTab4Visible(!tab4Visible) }

    useEffect(() => {
        if (tab1Visible || tab2Visible || tab3Visible || tab4Visible) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [tab1Visible, tab2Visible, tab3Visible, tab4Visible]);

    return(
        <>
            <SlideUp className={section.sectionContainer}>

                <SlideUp className={section.caption}>
                    Meet 4 of the 71 playable operators from all hailing from one of
                    the 32 CTUs in the game.
                </SlideUp>

                <div className={team.flexContainer}>

                    <SlideUp className={team.flexCard} onClick={toggleTab1}>
                        <Image
                            className={team.flexBackground}
                            src={ash}
                        />
                        <div className={team.gradientOverlay} />
                        <div className={team.textOverlay}>
                            <div>Ash</div>
                            <div className={team.overlayBtn} />
                        </div>

                    </SlideUp>

                    <SlideUp delay={0.3} className={team.flexCard} onClick={toggleTab2}>
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

                    <SlideUp delay={0.6} className={team.flexCard} onClick={toggleTab3}>
                        <Image
                            className={team.flexBackground}
                            src={thatcher}
                        />
                        <div className={team.gradientOverlay} />
                        <div className={team.textOverlay}>
                            <div>Thatcher</div>
                            <div className={team.overlayBtn}/>
                        </div>

                    </SlideUp>
                    
                    <SlideUp delay={0.9} className={team.flexCard} onClick={toggleTab4}>
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

                </div>
            </SlideUp>

            <AnimatePresence>
                {tab1Visible && (
                    <div className={tabs.tabContainer} >
                        <motion.div
                            className={tabs.tabBackground}
                            initial={{x: "100%"}}
                            animate={{x: 0}}
                            exit={{x: "100%"}}
                            transition={{ ease: easeInOut, duration: 0.5 }}
                        >
                                <div className={tabs.closeTab} onClick={toggleTab1} />
                                <div className={tabs.tabContentContainer}>
                                    <div className={tabs.tabRow}>
                                        <FadeIn className={tabs.titleRow}>
                                            <div className={tabs.subHeader}>TITLE 1</div>
                                            <div className={tabs.text}>CAPTION</div>
                                        </FadeIn>
                                    </div>

                                    <FadeIn delay={0.2} className={tabs.tabRow}>
                                        <div className={tabs.subHeader}>TEST</div>
                                        <div className={tabs.text}>TEST</div>
                                    </FadeIn>

                                    <FadeIn delay={0.4} className={tabs.tabRow}>
                                        <div className={tabs.subHeader}>TEST</div>
                                        <div className={tabs.text}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis neque vestibulum est lobortis, sit amet pharetra lorem dapibus. Quisque sit amet ultrices mi, ac consectetur mauris. Donec vel odio sem. Aenean et magna ex. Duis elementum feugiat nisi eget interdum. Curabitur iaculis ut quam fermentum tempus. Aenean suscipit metus sit amet tellus posuere, maximus consectetur mauris ullamcorper. Aenean egestas pellentesque libero, vitae egestas odio sodales in. Praesent vitae sodales neque. Etiam mi urna, commodo quis aliquam nec, auctor in ex. Duis porta urna sed mauris sagittis fringilla. Proin tincidunt imperdiet ipsum. In rutrum, ante id laoreet vestibulum, est nibh efficitur arcu, quis ultrices turpis turpis id diam. Nullam sagittis efficitur ipsum non vehicula.
                                            Fusce sagittis arcu non porta semper. Vestibulum nec rutrum ipsum. Praesent imperdiet tempor mauris eu auctor. Proin arcu arcu, fringilla ut felis non, pellentesque interdum lacus. Morbi id nulla vitae arcu volutpat facilisis. Maecenas sapien mauris, scelerisque id turpis ut, convallis rutrum lorem. Nam elementum elementum urna, ac accumsan nibh. Donec tempus auctor ex, quis eleifend est gravida ut. Suspendisse nec nisl scelerisque, dapibus erat eget, accumsan lorem. Curabitur semper tincidunt dictum. Vivamus dolor diam, bibendum id mattis id, scelerisque id ex.
                                        </div>
                                    </FadeIn>

                                    <FadeIn className={tabs.tabRow}>
                                        <div className={tabs.subHeader}>TEST</div>
                                        <div className={tabs.text}>TEST</div>
                                    </FadeIn>
                                </div>
                        </motion.div>
                    </div>
                )}

                {tab2Visible && (
                    <div className={tabs.tabContainer} >
                        <motion.div
                            className={tabs.tabBackground}
                            initial={{x: "100%"}}
                            animate={{x: 0}}
                            exit={{x: "100%"}}
                            transition={{ ease: easeInOut, duration: 0.5 }}
                        >
                                <div className={tabs.closeTab} onClick={toggleTab2} />
                                <div className={tabs.tabContentContainer}>
                                    <div className={tabs.tabRow}>
                                        <FadeIn className={tabs.titleRow}>
                                            <div className={tabs.subHeader}>TITLE 2</div>
                                            <div className={tabs.text}>CAPTION</div>
                                        </FadeIn>
                                    </div>

                                    <FadeIn delay={0.2} className={tabs.tabRow}>
                                        <div className={tabs.subHeader}>TEST</div>
                                        <div className={tabs.text}>TEST</div>
                                    </FadeIn>

                                    <FadeIn delay={0.4} className={tabs.tabRow}>
                                        <div className={tabs.subHeader}>TEST</div>
                                        <div className={tabs.text}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis neque vestibulum est lobortis, sit amet pharetra lorem dapibus. Quisque sit amet ultrices mi, ac consectetur mauris. Donec vel odio sem. Aenean et magna ex. Duis elementum feugiat nisi eget interdum. Curabitur iaculis ut quam fermentum tempus. Aenean suscipit metus sit amet tellus posuere, maximus consectetur mauris ullamcorper. Aenean egestas pellentesque libero, vitae egestas odio sodales in. Praesent vitae sodales neque. Etiam mi urna, commodo quis aliquam nec, auctor in ex. Duis porta urna sed mauris sagittis fringilla. Proin tincidunt imperdiet ipsum. In rutrum, ante id laoreet vestibulum, est nibh efficitur arcu, quis ultrices turpis turpis id diam. Nullam sagittis efficitur ipsum non vehicula.
                                            Fusce sagittis arcu non porta semper. Vestibulum nec rutrum ipsum. Praesent imperdiet tempor mauris eu auctor. Proin arcu arcu, fringilla ut felis non, pellentesque interdum lacus. Morbi id nulla vitae arcu volutpat facilisis. Maecenas sapien mauris, scelerisque id turpis ut, convallis rutrum lorem. Nam elementum elementum urna, ac accumsan nibh. Donec tempus auctor ex, quis eleifend est gravida ut. Suspendisse nec nisl scelerisque, dapibus erat eget, accumsan lorem. Curabitur semper tincidunt dictum. Vivamus dolor diam, bibendum id mattis id, scelerisque id ex.
                                        </div>
                                    </FadeIn>

                                    <FadeIn className={tabs.tabRow}>
                                        <div className={tabs.subHeader}>TEST</div>
                                        <div className={tabs.text}>TEST</div>
                                    </FadeIn>
                                </div>
                        </motion.div>
                    </div>
                )}

                {tab3Visible && (
                    <div className={tabs.tabContainer} >
                        <motion.div
                            className={tabs.tabBackground}
                            initial={{x: "100%"}}
                            animate={{x: 0}}
                            exit={{x: "100%"}}
                            transition={{ ease: easeInOut, duration: 0.5 }}
                        >
                                <div className={tabs.closeTab} onClick={toggleTab3} />
                                <div className={tabs.tabContentContainer}>
                                    <div className={tabs.tabRow}>
                                        <FadeIn className={tabs.titleRow}>
                                            <div className={tabs.subHeader}>TITLE 3</div>
                                            <div className={tabs.text}>CAPTION</div>
                                        </FadeIn>
                                    </div>

                                    <FadeIn delay={0.2} className={tabs.tabRow}>
                                        <div className={tabs.subHeader}>TEST</div>
                                        <div className={tabs.text}>TEST</div>
                                    </FadeIn>

                                    <FadeIn delay={0.4} className={tabs.tabRow}>
                                        <div className={tabs.subHeader}>TEST</div>
                                        <div className={tabs.text}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis neque vestibulum est lobortis, sit amet pharetra lorem dapibus. Quisque sit amet ultrices mi, ac consectetur mauris. Donec vel odio sem. Aenean et magna ex. Duis elementum feugiat nisi eget interdum. Curabitur iaculis ut quam fermentum tempus. Aenean suscipit metus sit amet tellus posuere, maximus consectetur mauris ullamcorper. Aenean egestas pellentesque libero, vitae egestas odio sodales in. Praesent vitae sodales neque. Etiam mi urna, commodo quis aliquam nec, auctor in ex. Duis porta urna sed mauris sagittis fringilla. Proin tincidunt imperdiet ipsum. In rutrum, ante id laoreet vestibulum, est nibh efficitur arcu, quis ultrices turpis turpis id diam. Nullam sagittis efficitur ipsum non vehicula.
                                            Fusce sagittis arcu non porta semper. Vestibulum nec rutrum ipsum. Praesent imperdiet tempor mauris eu auctor. Proin arcu arcu, fringilla ut felis non, pellentesque interdum lacus. Morbi id nulla vitae arcu volutpat facilisis. Maecenas sapien mauris, scelerisque id turpis ut, convallis rutrum lorem. Nam elementum elementum urna, ac accumsan nibh. Donec tempus auctor ex, quis eleifend est gravida ut. Suspendisse nec nisl scelerisque, dapibus erat eget, accumsan lorem. Curabitur semper tincidunt dictum. Vivamus dolor diam, bibendum id mattis id, scelerisque id ex.
                                        </div>
                                    </FadeIn>

                                    <FadeIn className={tabs.tabRow}>
                                        <div className={tabs.subHeader}>TEST</div>
                                        <div className={tabs.text}>TEST</div>
                                    </FadeIn>
                                </div>
                        </motion.div>
                    </div>
                )}

                {tab4Visible && (
                    <div className={tabs.tabContainer} >
                        <motion.div
                            className={tabs.tabBackground}
                            initial={{x: "100%"}}
                            animate={{x: 0}}
                            exit={{x: "100%"}}
                            transition={{ ease: easeInOut, duration: 0.5 }}
                        >
                                <div className={tabs.closeTab} onClick={toggleTab4} />
                                <div className={tabs.tabContentContainer}>
                                    <div className={tabs.tabRow}>
                                        <FadeIn className={tabs.titleRow}>
                                            <div className={tabs.subHeader}>TITLE 4</div>
                                            <div className={tabs.text}>CAPTION</div>
                                        </FadeIn>
                                    </div>

                                    <FadeIn delay={0.2} className={tabs.tabRow}>
                                        <div className={tabs.subHeader}>TEST</div>
                                        <div className={tabs.text}>TEST</div>
                                    </FadeIn>

                                    <FadeIn delay={0.4} className={tabs.tabRow}>
                                        <div className={tabs.subHeader}>TEST</div>
                                        <div className={tabs.text}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis neque vestibulum est lobortis, sit amet pharetra lorem dapibus. Quisque sit amet ultrices mi, ac consectetur mauris. Donec vel odio sem. Aenean et magna ex. Duis elementum feugiat nisi eget interdum. Curabitur iaculis ut quam fermentum tempus. Aenean suscipit metus sit amet tellus posuere, maximus consectetur mauris ullamcorper. Aenean egestas pellentesque libero, vitae egestas odio sodales in. Praesent vitae sodales neque. Etiam mi urna, commodo quis aliquam nec, auctor in ex. Duis porta urna sed mauris sagittis fringilla. Proin tincidunt imperdiet ipsum. In rutrum, ante id laoreet vestibulum, est nibh efficitur arcu, quis ultrices turpis turpis id diam. Nullam sagittis efficitur ipsum non vehicula.
                                            Fusce sagittis arcu non porta semper. Vestibulum nec rutrum ipsum. Praesent imperdiet tempor mauris eu auctor. Proin arcu arcu, fringilla ut felis non, pellentesque interdum lacus. Morbi id nulla vitae arcu volutpat facilisis. Maecenas sapien mauris, scelerisque id turpis ut, convallis rutrum lorem. Nam elementum elementum urna, ac accumsan nibh. Donec tempus auctor ex, quis eleifend est gravida ut. Suspendisse nec nisl scelerisque, dapibus erat eget, accumsan lorem. Curabitur semper tincidunt dictum. Vivamus dolor diam, bibendum id mattis id, scelerisque id ex.
                                        </div>
                                    </FadeIn>

                                    <FadeIn className={tabs.tabRow}>
                                        <div className={tabs.subHeader}>TEST</div>
                                        <div className={tabs.text}>TEST</div>
                                    </FadeIn>
                                </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}