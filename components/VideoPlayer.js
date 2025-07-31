import video from "../css/videoPlayer.module.css";

export default function VideoPlayer() {
  return (
    <video className={video.videoPlayer} autoPlay muted loop preload="auto">
      <source src={require("../public/_Hero.mp4")} />
      Your browser does not support the video tag.
    </video>
  );
}
