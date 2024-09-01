import video from "../css/videoPlayer.module.css"

export default function VideoPlayer() {
    return (
    <>
        <head>
            <link rel="preload" href="/path-to-video/0516-Prep.mp4" as="video" type="video/mp4"/>
        </head>

        <video className={video.videoPlayer} autoPlay muted loop preload="auto">
            <source src={require('../public/0516-WhiteMaskFull3.mp4')}/>
            Your browser does not support the video tag.
        </video>
    </>
    );
}