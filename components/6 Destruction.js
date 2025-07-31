import section from "../css/section.module.css";
import trailer from "../css/trailer.module.css";
import SlideUp from "./SlideUp";

export default function Destruction() {
  return (
    <div className={section.cardContainer}>
      <div className={trailer.banner}>
        <div className={trailer.textOverlay}>
          <SlideUp className={trailer.mainText}>ENDLESS TENSION</SlideUp>
          <SlideUp className={trailer.mainText} delay={0.2}>
            ENDLESS ACTION
          </SlideUp>
        </div>
      </div>
    </div>
  );
}
