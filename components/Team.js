import section from "../css/section.module.css"
import team from "../css/team.module.css"
import Image from "next/image";

import bank from "../public/maps-bank.webp"
import border from "../public/maps-border.webp"
import chalet from "../public/maps-chalet.webp"
import coastline from "../public/maps-coastline.webp"
import favela from "../public/maps-favela.webp"

export default function Team() {
    return(
        <div className={section.cardContainer}>

            <div className={section.caption}>
                Meet the 71 playable operators from all hailing from one of
                the 32 CTUs in the game
            </div>

            <div className={team.flexContainer}>

                <div className={team.flexCard}>
                    <Image
                        className={team.flexBackground}
                        src={bank}
                    />
                    <div className={team.textOverlay}>
                        <div className={team.mainText}></div>
                    </div>

                </div>

                <div className={team.flexCard}>
                    <Image
                        className={team.flexBackground}
                        src={bank}
                    />
                    <div className={team.textOverlay}>
                        <div className={team.mainText}></div>
                    </div>

                </div>

                <div className={team.flexCard}>
                    <Image
                        className={team.flexBackground}
                        src={bank}
                    />
                    <div className={team.textOverlay}>
                        <div className={team.mainText}></div>
                    </div>

                </div>

                <div className={team.flexCard}>
                    <Image
                        className={team.flexBackground}
                        src={bank}
                    />
                    <div className={team.textOverlay}>
                        <div className={team.mainText}></div>
                        <div className={team.overlayBtn}></div>
                    </div>

                </div>

            </div>
        </div>
    );
}