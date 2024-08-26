'use client'

import { useEffect, useState } from "react";
import { motion, useAnimation, AnimatePresence, easeInOut } from "framer-motion";

import navbar from "../css/navbar.module.css"
import tabs from "../css/tabs.module.css"

import FadeIn from "./FadeIn";

const Navbar = () => {

    const [tabVisible, setTabVisible] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0);
  
    const controls = useAnimation()

    useEffect(() => {
        const scroll = () => {
          if (window.scrollY > lastScrollY && window.scrollY > 100) {
            controls.start({ y: -100 }); 
          } else {
            controls.start({ y: 0 }); 
          }
        
          setLastScrollY(window.scrollY);
        };
    
        window.addEventListener('scroll', scroll);
    
        return () => {
          window.removeEventListener('scroll', scroll);
        };
      }, [controls, lastScrollY]);

    const toggleTab = () => {
        setTabVisible(!tabVisible)
    }

    useEffect(() => {
        if (tabVisible) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [tabVisible]);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setTabVisible(false)
        }
        if (sectionId == 'welcome') {
            window.scrollTo({top: 0, behavior: "smooth"});
            setTabVisible(false)
        }
      };

    return (
        <>
        <motion.div 
            animate={controls}
            transition={{ duration: 0.2, ease: "easeInOut"}}
            className={navbar.navbarContainer}
        >
            <div className={navbar.logo} onClick={() => scrollToSection('welcome')}>6</div>
            <div className={navbar.menu} onClick={toggleTab}>=</div>
        </motion.div>

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
                            <div className={tabs.closeTab} onClick={toggleTab} />
                            <div className={tabs.tabContentContainer}>
                                <div className={tabs.tabRow}>
                                    <FadeIn className={tabs.titleRow}>
                                        <div className={tabs.subHeader} style={{ cursor: "pointer" }} onClick={() => scrollToSection('welcome')}> Welcome </div>
                                        <div className={tabs.subHeader} style={{ cursor: "pointer" }} onClick={() => scrollToSection('basics')}> Learn the Basics </div>
                                        <div className={tabs.subHeader} style={{ cursor: "pointer" }} onClick={() => scrollToSection('travel')}> Travel the World </div>
                                        <div className={tabs.subHeader} style={{ cursor: "pointer" }} onClick={() => scrollToSection('team')}> Meet Team Rainbow </div>
                                        <div className={tabs.subHeader} style={{ cursor: "pointer" }} onClick={() => scrollToSection('gadgets')}> Master Gadgetry </div>
                                    </FadeIn>
                                </div>
                            </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
        </>
    )
}

export default Navbar;