"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useAnimation,
  AnimatePresence,
  easeInOut,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

import navbar from "../css/navbar.module.css";
import tabs from "../css/tabs.module.css";

import FadeIn from "./FadeIn";

const Navbar = () => {
  const [tabVisible, setTabVisible] = useState(false);
  const [barVisible, setBarVisible] = useState(true);

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const diff = latest - scrollYProgress.getPrevious();
    if (diff > 0) setBarVisible(false);
    else setBarVisible(true);
  });

  const toggleTab = () => {
    setTabVisible(!tabVisible);
  };

  useEffect(() => {
    if (tabVisible) {
      document.documentElement.classList.add("no-scroll");
    } else {
      document.documentElement.classList.remove("no-scroll");
    }
  }, [tabVisible]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setTabVisible(false);
    }
    if (sectionId == "welcome") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTabVisible(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {barVisible && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={navbar.navbarContainer}
          >
            <div
              className={navbar.logo}
              onClick={() => scrollToSection("welcome")}
              style={{ transform: "translateY(1rem)" }}
            >
              ^
            </div>
            <div className={navbar.menu} onClick={toggleTab}>
              =
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {tabVisible && (
          <div className={tabs.tabContainer} onClick={toggleTab}>
            <motion.div
              className={tabs.tabBackground}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ ease: easeInOut, duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={tabs.closeTab} onClick={toggleTab} />
              <div className={tabs.tabContentContainer}>
                <div className={tabs.tabRow}>
                  <FadeIn className={tabs.titleRow}>
                    <div
                      className={tabs.subHeader}
                      style={{ cursor: "pointer" }}
                      onClick={() => scrollToSection("welcome")}
                    >
                      {" "}
                      Welcome{" "}
                    </div>
                    <div
                      className={tabs.subHeader}
                      style={{ cursor: "pointer" }}
                      onClick={() => scrollToSection("basics")}
                    >
                      {" "}
                      Learn the Basics{" "}
                    </div>
                    <div
                      className={tabs.subHeader}
                      style={{ cursor: "pointer" }}
                      onClick={() => scrollToSection("travel")}
                    >
                      {" "}
                      Travel the World{" "}
                    </div>
                    <div
                      className={tabs.subHeader}
                      style={{ cursor: "pointer" }}
                      onClick={() => scrollToSection("team")}
                    >
                      {" "}
                      Meet Team Rainbow{" "}
                    </div>
                    <div
                      className={tabs.subHeader}
                      style={{ cursor: "pointer" }}
                      onClick={() => scrollToSection("gadgets")}
                    >
                      {" "}
                      Master Gadgetry{" "}
                    </div>
                  </FadeIn>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
