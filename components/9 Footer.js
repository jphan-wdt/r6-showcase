import footer from "../css/footer.module.css"

export default function Footer() {
    return (
        <div className={footer.container}>
            
            <div className={footer.leftCol}>
                <div>Linkedin</div>
                <div>Github</div>
            </div>

            <div className={footer.rightCol}>
                Coded using Visual Studio Code.
                Built with Next.js.
                Deployed using Vercel.
                All images are from Rainbow Six Wiki and Ubisoft Youtube channel.
                All texts are from Rainbow Six Wiki using Inter typeface. 
            </div>
        </div>
    );
}