import video from "../css/videoPlayer.module.css"

export default function VideoPlayer() {
    return (
        <video className={video.videoPlayer} autoPlay muted loop>
            <source src={require('../public/0516-WhiteMaskFull3.mp4')}/>
            Your browser does not support the video tag.
        </video>
    );
}