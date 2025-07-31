"use client";

import page from "./page.module.css";
import Welcome from "@/components/1 Welcome";
import Explore from "@/components/2 Explore";
import Trailer from "@/components/3 Trailer";
import Basics from "@/components/4 Basics";
import Travel from "@/components/5 Travel";
import Destruction from "@/components/6 Destruction";
import Team from "@/components/7 Team";
import Gadgets from "@/components/8 Gadgets";
import Footer from "@/components/9 Footer";
import Contact from "@/components/10 Contact";

import SlideUp from "@/components/SlideUp";
import Navbar from "@/components/Navbar";

import Lenis from "lenis";
import "lenis/dist/lenis.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { useRef } from "react";
import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
  easeOut,
} from "framer-motion";

export default function Home() {
  // const lenis = new Lenis({
  //   autoRaf: true,
  // });
  const { scrollYProgress } = useScroll();

  const controls = useAnimation();
  const variants = {
    hidden: { scale: 0.95 },
    visible: { scale: 1 },
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
    if (latest < 0.06 || latest > 0.98) controls.start("hidden");
    else controls.start("visible");
  });
  return (
    <div style={{ marginBottom: "25vh" }}>
      <SpeedInsights />
      <Welcome />
      <Navbar />

      <motion.main
        className={page.mainContainer}
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className={page.subHeader} id="first">
          Explore
        </div>
        <div className={page.caption}>What&apos;s new</div>
        <Explore />

        <Trailer />

        <div id="basics" className={page.subHeader}>
          Learn the Basics
        </div>
        <Basics />

        <div id="travel" className={page.subHeader}>
          Travel the World
        </div>
        <Travel />

        <Destruction />

        <div id="team" className={page.subHeader}>
          Meet Team Rainbow
        </div>
        <Team />

        <div id="gadgets" className={page.subHeader}>
          Master Gadgetry
        </div>
        <Gadgets />

        <Contact />
      </motion.main>

      <Footer />
    </div>
  );
}
