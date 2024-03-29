import {useEffect, useRef} from "react";
import {v4 as uuidv4} from 'uuid';

const Video = (props: {
    src: string, playVideo: boolean, setPlayVideo: Function,
    videoPlaybackLocation: { location: number, id: string } | undefined,
    setVideoPlaybackLocation: Function
}) => {
    const videoEl: any = useRef(null);
    const id = useRef(uuidv4().toString());
    const dirtyVideoPlaybackChangeFlag = useRef<boolean>(false);

    useEffect(() => {
        if (videoEl && videoEl.current) {
            videoEl.current.onpause = (event: any) => {
                props.setPlayVideo(false);
            };

            videoEl.current.onplay = (event: any) => {
                props.setPlayVideo(true);
            };

            videoEl.current.ontimeupdate = (event: any) => {
                if (!dirtyVideoPlaybackChangeFlag.current) {
                    if (videoEl.current.paused) {
                        console.log("streaming new play time from ", id);
                        props.setVideoPlaybackLocation({location: videoEl.current.currentTime, id: id.current});
                    }
                } else {
                    dirtyVideoPlaybackChangeFlag.current = false;
                }
            }
        }
    }, []);

    useEffect(() => {
        if (videoEl && videoEl.current && props.videoPlaybackLocation) {
            if (!dirtyVideoPlaybackChangeFlag.current) {
                console.log("getting new play time from ", props.videoPlaybackLocation?.id);
                dirtyVideoPlaybackChangeFlag.current = true;
                videoEl.current.currentTime = props.videoPlaybackLocation?.location;
            }
        }
    }, [props.videoPlaybackLocation])

    useEffect(() => {
        if (videoEl && videoEl.current) {
            if (props.playVideo) {
                videoEl.current.play();
            } else {
                videoEl.current.pause();
            }
        }
    }, [props.playVideo])

    return (
        <video ref={videoEl} width="50%" height="100%" controls autoPlay={true} muted={true} loop={false}>
            <source src={props.src} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
    );
}

export default Video;