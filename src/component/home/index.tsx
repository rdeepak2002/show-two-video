import { Carousel } from "react-bootstrap";

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
        <div style={{display: "flex", alignContent: "center", justifyContent: "center", alignItems: "center", height: "100%"}}>
            <Video src={"video/vid1.mp4"}/>
            <Video src={"video/vid2.mp4"}/>
        </div>
    );
}

const HomePage = () => {
    return (
        <div style={{width: "100%", height: "100%", background: "black"}}>
            <Carousel>
                <Carousel.Item>
                    <VideoPair />
                </Carousel.Item>
                <Carousel.Item>
                    <VideoPair />
                </Carousel.Item>
                <Carousel.Item>
                    <VideoPair />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default HomePage;