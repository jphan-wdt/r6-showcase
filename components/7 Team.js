import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import section from "../css/section.module.css";
import team from "../css/team.module.css";
import tabs from "../css/tabs.module.css";
import Image from "next/image";

import SlideUp from "./SlideUp";
import FadeIn from "./FadeIn";

import ash from "../public/profile-ash2.webp";
import mira from "../public/profile-mira2.jpg";
import thatcher from "../public/profile-thatcher2.webp";
import twitch from "../public/profile-twitch2.jpg";

import ashTab from "../public/profile-ash-tab2.webp";
import miraTab from "../public/profile-mira-tab.webp";
import thatcherTab from "../public/profile-thatcher-tab.webp";
import twitchTab from "../public/profile-twitch-tab.webp";

export default function Team() {
  const operatorData = [
    { header: "Ash", src: ash, tab: "tab1" },
    { header: "Mira", src: mira, tab: "tab2" },
    { header: "Thatcher", src: thatcher, tab: "tab3" },
    { header: "Twitch", src: twitch, tab: "tab4" },
  ];

  const tabData = {
    tab1: {
      src: ashTab,
      text: `"When I was little, my savta taught me that 'Silence was a woman's best garment'. But, I have to admit, I never really took her advice to heart."`,
      name: "Eliza Cohen",
      role: "Soft breach, Disable, Flank, Entry Fragger",
      biography: `Her military training as a demolitions specialist has left Cohen with an inflated sense of self.
                She can be aggressive, impulsive, and overly confident.
                She is quick to action, which can be an asset or fatal for someone in her line of work.`,
    },

    tab2: {
      src: miraTab,
      text: `"Think of me as your conscience. I see everything, and I'm just as ruthless."`,
      name: "Elena María Álvarez",
      role: "Defender",
      biography: `Abandoned by her mother at birth, she was raised by her father in Madrid. Being an only child, she found her purpose working for the family business.
                Specialist Elena María “Mira" Álvarez thinks on her feet. Someone this adaptable and versatile is difficult to predict. as they should be.
                She takes risks, though, and I'm hoping they're calculated ones. Álvarez is one of the operators who most strives to be a hero.
                Ferociously protective of teammates and those she considers friends, she can nonetheless dominate an operation, forcing others to blend their tactics with hers if they wish to succeed.`,
    },

    tab3: {
      src: thatcherTab,
      text: `"GPS satellites? Unmanned drones? Fookin' laser sights?
                The more crutches you have, the more it hurts when they're kicked out from under ya.
                If there's one thing I know for sure, it's that a six inch blade never loses reception."`,
      name: "Mike Baker",
      role: "Attacker",
      biography: `Baker is highly observant, calculating and decisive. While his demeanor may denote traces of impatient cynicism, Baker possesses a profound sense of ethical responsibility.
                It is recommended to assign Baker with junior operators of strong moral conviction, whom he can mentor.
                Baker has a distinguished record of military service. He's respected and in some cases idolized by those he mentors.
                When he welcomed me to his home, I could see why people describe him as down-to-earth.'+
                There's more to Baker's gruff, no-nonsense exterior`,
    },

    tab4: {
      src: twitchTab,
      text: `"If you have a few spare hours, I'd love to share the details of how this device is a masterpiece of design.
                Quadruple independent gear boxes enabling zero to twenty in under four seconds, ten kilometers of internal wiring, eleven hundred expertly machined hand-assembled components, flawless control at over 300 meters...
                 But all my team needs to know is, 'Does it do the job, or doesn't it?' And let me tell you right now - it does the job."`,
      name: "Emmanuelle Pichon",
      role: "Attacker",
      biography: `Pichon demonstrates an affinity for complex robotic systems and mechanical academia, due to an early exposure to analytical problem-solving.
                This ability transcends academia. Unlike many engineers who have the propensity to be emotionally disconnected or apathetic, Pichon is strongly intuitive and empathetic.
                She believes that technology's best use is to improve the quality of life. This principle motivates Pichon in her military service.`,
    },
  };

  const [activeTab, setActiveTab] = useState(null);
  const [tabVisible, setTabVisible] = useState(false);

  const openTab = (tabIndex) => {
    setTabVisible(true);
    setActiveTab(tabData[tabIndex]);
    document.documentElement.classList.add("no-scroll");
  };

  const closeTab = () => {
    setTabVisible(false);
    document.documentElement.classList.remove("no-scroll");
  };
  const stopClickThrough = (e) => e.stopPropagation();

  const OperatorCard = ({ src, header, onClick }) => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 100; // range [-1, 1]
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 100;
      setMousePos({ x, y });
    };

    return (
      <motion.div
        className={team.flexCard}
        onClick={onClick}
        onMouseMove={handleMouseMove}
      >
        <div className={team.flexBackground}>
          <Image
            className={team.image}
            src={src}
            style={{
              transform: `translate(${mousePos.x * -0.15}%, ${
                mousePos.y * -0.15
              }%)`,
            }}
          />
        </div>
        <div className={team.gradientOverlay} />
        <div
          className={team.textOverlay}
          style={{
            transform: `translate(${mousePos.x * 0.05}%, ${mousePos.y * 1}%)`,
          }}
        >
          <div>{header}</div>
          <div className={team.overlayBtn} />
        </div>
      </motion.div>
    );
  };

  return (
    <>
      <SlideUp className={section.sectionContainer}>
        <SlideUp className={section.caption}>
          Meet 4 of the 71 playable operators from all hailing from one of the
          32 CTUs in the game.
        </SlideUp>

        <div className={team.flexContainer}>
          {operatorData.map((operator, index) => (
            <OperatorCard
              key={index}
              src={operator.src}
              header={operator.header}
              onClick={() => openTab(operator.tab)}
              delay={index * 0.3}
            />
          ))}
        </div>
      </SlideUp>

      <AnimatePresence>
        {tabVisible && (
          <div className={tabs.tabContainer} onClick={closeTab}>
            <motion.div
              className={tabs.tabBackground}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 1, ease: [0.75, 0, 0.25, 1] }}
              onClick={stopClickThrough}
            >
              <div className={tabs.closeTab} onClick={closeTab} />
              <div className={tabs.tabContentContainer}>
                <div className={tabs.tabRow}>
                  <FadeIn className={tabs.titleRow}>
                    <div className={tabs.subHeader}> {activeTab.header} </div>
                    <i className={tabs.text}> {activeTab.text} </i>
                  </FadeIn>
                </div>

                <div className={tabs.tabImageContainer}>
                  <Image src={activeTab.src} className={tabs.tabImage} />
                </div>

                <FadeIn delay={0.2} className={tabs.tabRow}>
                  <div className={tabs.subHeader}>Real Name</div>
                  <div className={tabs.text}> {activeTab.name} </div>
                </FadeIn>

                <FadeIn delay={0.4} className={tabs.tabRow}>
                  <div className={tabs.subHeader}>Role</div>
                  <div className={tabs.text}> {activeTab.role} </div>
                </FadeIn>

                <FadeIn className={tabs.tabRow}>
                  <div className={tabs.subHeader}>Biography</div>
                  <div className={tabs.text}> {activeTab.biography} </div>
                </FadeIn>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
