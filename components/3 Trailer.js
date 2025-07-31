import trailer from "../css/trailer.module.css";
import shieldLineup from "../public/shield-lineup.jpg";
import SlideUp from "./SlideUp";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Trailer() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end end"],
  });
  const imageWidth = useTransform(scrollYProgress, [0, 0.6], ["70%", "100%"]);
  return (
    <div className={trailer.cardContainer} ref={scrollRef}>
      <motion.div className={trailer.banner} style={{ width: imageWidth }}>
        <Image className={trailer.image} src={shieldLineup} />

        <div className={trailer.textOverlay}>
          <SlideUp className={trailer.mainText}>BREACH. SECURE.</SlideUp>
          <SlideUp className={trailer.mainText}>DEFEND. ATTACK.</SlideUp>
          <SlideUp className={trailer.subText}>
            Discover an elite, tactical shooter where superior planning and
            flawless execution reigns supreme
          </SlideUp>
        </div>
      </motion.div>

      <iframe
        src="https://www.youtube.com/embed/RPY3TQSolm4?si=AfNnePVL95ZvncDB"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}
