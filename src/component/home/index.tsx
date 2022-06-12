import {Carousel} from "react-bootstrap";
import {useState} from "react";
import VideoPair from "./VideoPair";
import {videoData} from "../../config/config";

const HomePage = () => {
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