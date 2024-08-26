'use client'

import welcome from "../css/welcome.module.css"
import VideoPlayer from "./VideoPlayer"
import FadeIn from "./FadeIn";

export default function Welcome() {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        } 
      };

    return (   
    <div className={welcome.Hero}>

        <VideoPlayer/>

        <FadeIn className={welcome.textOverlayContainer}>
            <div className={welcome.menu}>
                <button className={welcome.menuItem}>Welcome</button>
                <button className={welcome.menuItem} onClick={() => scrollToSection('basics')}>Learn the Basics</button>
                <button className={welcome.menuItem} onClick={() => scrollToSection('travel')}>Travel the World</button>
                <button className={welcome.menuItem} onClick={() => scrollToSection('team')}>Meet Team Rainbow</button>
                <button className={welcome.menuItem} onClick={() => scrollToSection('gadgets')}>Master Gadgetry</button>
                
            </div>
            <div className={welcome.rightCol}>
                <div className={welcome.title}>Strategic Perfection</div>
                <br/>
                <div className={welcome.description}>
                    Plan, prepare, execute. Face the most
                    formidable opponents in the world of Rainbow Six
                </div>

                <div className={welcome.ctaContainer}>
                    <a href={'https://rainbowsix.fandom.com/wiki/Rainbow_Six_Wiki'} className={welcome.ctaButton}>Learn More </a>
                    <a href={'https://www.ubisoft.com/en-gb/game/rainbow-six/siege'} className={welcome.ctaButton}>Buy Now </a>
                </div>

            </div>
        </FadeIn>
    </div>
    );
}