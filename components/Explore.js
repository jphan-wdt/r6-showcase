import section from "../css/explore.module.css"

export default function Explore() {
    return(
        <div className={section.cardContainer}>
            <div><i>"There's no hiding. Not for you, not for me. Try not to disappoint me, soldier."</i></div>
            <iframe
                src="https://www.youtube.com/embed/toO4W1bYtq0?si=bNjREaL7PTupkUuh"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            />
                
        </div>
    );
}