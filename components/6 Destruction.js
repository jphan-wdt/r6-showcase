import section from "../css/section.module.css";
import trailer from "../css/trailer.module.css";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SlideUp from "./SlideUp";

export default function Destruction() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });
  const colour = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["#ffffff", "#600000"]
  );
  return (
    <div className={section.cardContainer} ref={scrollRef}>
      <div className={trailer.banner}>
        <div className={trailer.textOverlay}>
          <SlideUp className={trailer.mainText}>
            <span>ENDLESS</span>{" "}
            <motion.span style={{ color: colour }}>TENSION</motion.span>
          </SlideUp>
          <SlideUp className={trailer.mainText} delay={0.2}>
            <span>ENDLESS</span>{" "}
            <motion.span style={{ color: colour }}>ACTION</motion.span>
          </SlideUp>
        </div>
      </div>
    </div>
  );
}
