'use client'

import { useState, useEffect } from "react"
import section from "../css/section.module.css"
import basics from "../css/basics.module.css"
import tabs from "../css/tabs.module.css"
import Image from "next/image"

import ash from "../public/maps-bank.webp"

export default function Basics() {
    const [tab1Visible, setTab1Visible] = useState(false);
    const [tab2Visible, setTab2Visible] = useState(false);

    const toggleTab1 = () => {
        console.log(tab1Visible)
        setTab1Visible(!tab1Visible);
    }

    const toggleTab2 = () => {
        setTab2Visible(!tab2Visible);
    }

    useEffect(() => {
        if (tab1Visible) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [tab1Visible]);

    return(
        <>
            <div className={section.sectionContainer}>
                <div className={section.caption}>
                    Engage in intense close-quarter combat.
                    Every move matters, every second counts.
                    Master the fundamentals and play your part in victory.
                </div>

                <div className={basics.flexContainer}>

                    <div className={basics.leftCol} onClick={toggleTab1}>
                        <Image
                            className={basics.flexBackground}
                            src={ash}
                        />
                        <div className={basics.gradientOverlay} />
                        <div className={basics.textOverlay}>
                            <div>Game 1</div>
                            <div className={basics.overlayBtn} />
                        </div>
                    </div>
            
                    <div className={basics.rightCol}>
                        <Image
                            className={basics.flexBackground}
                            src={ash}
                        />
                        <div className={basics.gradientOverlay} />
                        <div className={basics.textOverlay}>
                            <div>Game 2</div>
                            <div className={basics.overlayBtn} />
                        </div>
                    </div>

                </div>
            </div>

            
            <div className={tab1Visible ? tabs.tabContainer : tabs.none} >
                <div className={tab1Visible ? tabs.tabBackground : tabs.tabBackgroundHidden} >
                    {tab1Visible && (
                        <>
                        <div className={tabs.closeTab} onClick={toggleTab1} />
                        <div className={tabs.tabContentContainer}>
                            <div className={tabs.tabRow}>
                                <div className={tabs.titleRow}>
                                    <div className={tabs.subHeader}>TITLE</div>
                                    <div className={tabs.text}>CAPTION</div>
                                </div>
                            </div>

                            <div className={tabs.tabRow}>
                                <div className={tabs.subHeader}>TEST</div>
                                <div className={tabs.text}>TEST</div>
                            </div>

                            <div className={tabs.tabRow}>
                                <div className={tabs.subHeader}>TEST</div>
                                <div className={tabs.text}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis neque vestibulum est lobortis, sit amet pharetra lorem dapibus. Quisque sit amet ultrices mi, ac consectetur mauris. Donec vel odio sem. Aenean et magna ex. Duis elementum feugiat nisi eget interdum. Curabitur iaculis ut quam fermentum tempus. Aenean suscipit metus sit amet tellus posuere, maximus consectetur mauris ullamcorper. Aenean egestas pellentesque libero, vitae egestas odio sodales in. Praesent vitae sodales neque. Etiam mi urna, commodo quis aliquam nec, auctor in ex. Duis porta urna sed mauris sagittis fringilla. Proin tincidunt imperdiet ipsum. In rutrum, ante id laoreet vestibulum, est nibh efficitur arcu, quis ultrices turpis turpis id diam. Nullam sagittis efficitur ipsum non vehicula.
                                    Fusce sagittis arcu non porta semper. Vestibulum nec rutrum ipsum. Praesent imperdiet tempor mauris eu auctor. Proin arcu arcu, fringilla ut felis non, pellentesque interdum lacus. Morbi id nulla vitae arcu volutpat facilisis. Maecenas sapien mauris, scelerisque id turpis ut, convallis rutrum lorem. Nam elementum elementum urna, ac accumsan nibh. Donec tempus auctor ex, quis eleifend est gravida ut. Suspendisse nec nisl scelerisque, dapibus erat eget, accumsan lorem. Curabitur semper tincidunt dictum. Vivamus dolor diam, bibendum id mattis id, scelerisque id ex.
                                </div>
                            </div>

                            <div className={tabs.tabRow}>
                                <div className={tabs.subHeader}>TEST</div>
                                <div className={tabs.text}>TEST</div>
                            </div>
                        </div>
                        </> 
                    )}
                </div>
            </div>

            {tab2Visible && (
                <div>
                    
                </div>
            )}
        </>
    );
}