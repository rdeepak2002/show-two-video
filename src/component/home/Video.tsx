import {useEffect, useRef} from "react";

const Video = (props: { src: string, playVideo: boolean, setPlayVideo: Function }) => {
    const videoEl: any = useRef(null);

    useEffect(() => {
        if (videoEl && videoEl.current) {
            videoEl.current.onpause = (event: any) => {
                props.setPlayVideo(false);
            };

            videoEl.current.onplay = (event: any) => {
                props.setPlayVideo(true);
            };
        }
    }, []);

    useEffect(() => {
        if (videoEl && videoEl.current) {
            if (props.playVideo) {
                videoEl.current.play();
            } else {
                videoEl.current.pause();
            }
        } else {
            console.error("Unable to play or pause video");
        }
    }, [props.playVideo])

    return (
        <video ref={videoEl} width="50%" height="100%" controls autoPlay={true} muted={true}>
            <source src={props.src} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
    );
}

export default Video;