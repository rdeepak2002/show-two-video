import {Carousel} from "react-bootstrap";
import {useState} from "react";
import VideoPair from "./VideoPair";

const HomePage = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex: any, e: any) => {
        setIndex(selectedIndex);
    };

    return (
        <div style={{width: "100%", height: "100%", background: "black"}}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <VideoPair currentCarouselIndex={index}
                               carouselIndex={0}
                               title={"title"} dataSrc={"data/data.csv"} video1Src={"video/vid1.mp4"}
                               video2Src={"video/vid2.mp4"}/>
                </Carousel.Item>
                <Carousel.Item>
                    <VideoPair currentCarouselIndex={index}
                               carouselIndex={1}
                               title={"title"} dataSrc={"data/data.csv"} video1Src={"video/vid1.mp4"}
                               video2Src={"video/vid2.mp4"}/>
                </Carousel.Item>
                <Carousel.Item>
                    <VideoPair currentCarouselIndex={index}
                               carouselIndex={2}
                               title={"title"} dataSrc={"data/data.csv"} video1Src={"video/vid1.mp4"}
                               video2Src={"video/vid2.mp4"}/>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default HomePage;