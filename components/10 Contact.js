import trailer from "../css/trailer.module.css";
import section from "../css/section.module.css";
import page from "../app/page.module.css";
import lineup from "../public/full-lineup.jpg";
import ash from "../public/profile-ash.webp";
import SlideUp from "./SlideUp";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end end"],
  });
  const imageWidth = useTransform(scrollYProgress, [0, 0.6], ["70%", "100%"]);
  return (
    <div className={section.sectionContainer}>
      <div className={trailer.cardContainer} ref={scrollRef}>
        <motion.div
          className={trailer.banner}
          style={{ width: imageWidth, transition: "all 0.3s ease-out" }}
        >
          <Image className={trailer.image} src={lineup} />

          <div className={trailer.textOverlay}>
            <SlideUp className={trailer.mainText}>HIT FIRST</SlideUp>
            <SlideUp className={trailer.mainText}>HIT HARD</SlideUp>
            <SlideUp className={trailer.subText}>
              Master every situation. Control every encounter.
            </SlideUp>
          </div>
        </motion.div>

        <div className={trailer.contactContainer}>
          <Image className={trailer.imageFade} src={ash} />
          <div className={trailer.emailContainer}>
            <div>
              <div className={page.subHeader}>Join the Mission</div>
              <div className={page.caption}>
                Get updates on new projects, releases, or ideas.
              </div>
            </div>

            <div className={trailer.emailInputContainer}>
              <input
                type="email"
                placeholder="Email address"
                className={trailer.emailInput}
              />
              <button disabled className={trailer.subButton}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
