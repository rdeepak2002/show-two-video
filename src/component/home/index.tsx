import {Carousel} from "react-bootstrap";
import {useState} from "react";
import VideoPair from "./VideoPair";

const HomePage = () => {
    const videoData: any = [
        {
            title: "Trial 1",
            dataSrc: "data/data.csv",
            video1Src: "video/vid1.mp4",
            video2Src: "video/vid2.mp4"
        },
        {
            title: "Trial 2",
            dataSrc: "data/data.csv",
            video1Src: "video/vid3.mp4",
            video2Src: "video/vid4.mp4"
        },
        {
            title: "Trial 3",
            dataSrc: "data/data.csv",
            video1Src: "video/vid1.mp4",
            video2Src: "video/vid2.mp4"
        },
        {
            title: "Trial 4",
            dataSrc: "data/data.csv",
            video1Src: "video/vid1.mp4",
            video2Src: "video/vid2.mp4"
        },
    ];
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex: any, e: any) => {
        setIndex(selectedIndex);
    };

    return (
        <div style={{width: "100%", height: "100%", background: "black"}}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {
                    videoData.map((videoDat: any, num: number) => {
                        return (
                            <Carousel.Item>
                                <VideoPair currentCarouselIndex={index}
                                           carouselIndex={num}
                                           title={videoDat.title}
                                           dataSrc={videoDat.dataSrc}
                                           video1Src={videoDat.video1Src}
                                           video2Src={videoDat.video2Src}/>
                            </Carousel.Item>
                        );
                    })
                }
            </Carousel>
        </div>
    );
}

export default HomePage;