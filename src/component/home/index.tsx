const Video = (props: {src: string}) => {
    return (
        <video width="50%" height="100%" controls autoPlay={true} muted={true}>
            <source src={props.src} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
}

const VideoPair = () => {
    return (
        <div style={{display: "flex", flex: 1}}>
            <Video src={"video/vid1.mp4"}/>
            <Video src={"video/vid2.mp4"}/>
        </div>
    );
}

const HomePage = () => {
    return (
        <div style={{display: "flex", width: "100%", height: "100%"}}>
            <VideoPair />
        </div>
    );
}

export default HomePage;