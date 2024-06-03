import section from "../css/section.module.css"
import gadgets from "../css/gadgets.module.css"
import Image from "next/image"
import ash from "../public/maps-bank.webp"


export default function Gadgets() {
    return(
        <div className={section.sectionContainer}>
            <div className={gadgets.flexContainer}>

                <div className={gadgets.cardContainer}>
                    <div className={gadgets.flexCard}>
                        <Image
                            className={gadgets.flexBackground}
                            src={ash} />
                    </div>
                    <div className={gadgets.cardDesc}>Desc</div>   
                </div>

                <div className={gadgets.cardContainer}>
                    <div className={gadgets.flexCard}>
                        <Image
                            className={gadgets.flexBackground}
                            src={ash}
                        />
                    </div>
                    <div className={gadgets.cardDesc}>Desc</div>   
                </div>

                <div className={gadgets.cardContainer}>
                    <div className={gadgets.flexCard}>
                        <Image
                            className={gadgets.flexBackground}
                            src={ash}
                        />
                    </div>
                    <div className={gadgets.cardDesc}>Desc</div>   
                </div>

                <div className={gadgets.cardContainer}>
                    <div className={gadgets.flexCard}>
                        <Image
                            className={gadgets.flexBackground}
                            src={ash}
                        />
                    </div>
                    <div className={gadgets.cardDesc}>Desc</div>   
                </div>

            </div>
        </div>
    );
}