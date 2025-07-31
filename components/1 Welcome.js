import { useState } from "react";

import welcome from "../css/welcome.module.css";
import VideoPlayer from "./VideoPlayer";
import FadeIn from "./FadeIn";

export default function Welcome() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const isTouchDevice =
    typeof window !== "undefined" && "ontouchstart" in window;

  const handleMouseMove = (e) => {
    if (isTouchDevice) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 100;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 100;
    setMousePos({ x, y });
  };

  return (
    <div className={welcome.heroContainer}>
      <div className={welcome.Hero} onMouseMove={handleMouseMove}>
        <VideoPlayer />

        <FadeIn className={welcome.textOverlayContainer}>
          <div
            className={welcome.menu}
            style={{
              transform: `perspective(100vw) rotateX(${
                mousePos.y * -0.25 + 0
              }deg) rotateY(${mousePos.x * 0.25 + 15}deg)`,
            }}
          >
            <button className={welcome.menuItem}>Welcome</button>
            <button
              className={welcome.menuItem}
              onClick={() => scrollToSection("basics")}
            >
              Learn the Basics
            </button>
            <button
              className={welcome.menuItem}
              onClick={() => scrollToSection("travel")}
            >
              Travel the World
            </button>
            <button
              className={welcome.menuItem}
              onClick={() => scrollToSection("team")}
            >
              Meet Team Rainbow
            </button>
            <button
              className={welcome.menuItem}
              onClick={() => scrollToSection("gadgets")}
            >
              Master Gadgetry
            </button>
          </div>
          <div
            className={welcome.rightCol}
            style={{
              transform: `perspective(100vw) rotateX(${
                mousePos.y * -0.25 + 0
              }deg) rotateY(${mousePos.x * 0.25 - 15}deg)`,
            }}
          >
            <div className={welcome.title}>PLAN. PREPARE. EXECUTE.</div>

            <div className={welcome.description}>
              Face the most formidable opponents in the world of Rainbow Six
            </div>
            <br />

            <div className={welcome.ctaContainer}>
              <a
                href={"https://rainbowsix.fandom.com/wiki/Rainbow_Six_Wiki"}
                className={welcome.ctaButton}
              >
                Learn More{" "}
              </a>
              <a
                href={"https://www.ubisoft.com/en-gb/game/rainbow-six/siege"}
                className={welcome.ctaButton}
              >
                Buy Now{" "}
              </a>
            </div>
          </div>
        </FadeIn>
      </div>

      <div className={welcome.spacer} />
    </div>
  );
}
