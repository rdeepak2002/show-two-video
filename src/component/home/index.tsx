import {Carousel} from "react-bootstrap";
import {useEffect, useState} from "react";
import VideoPair from "./VideoPair";

const HomePage = () => {
    const [index, setIndex] = useState(0);
    const [configData, setConfigData] = useState<any>(undefined);

    const handleSelect = (selectedIndex: any, e: any) => {
        setIndex(selectedIndex);
    };

    useEffect(() => {
        fetch("config/config.json")
            .then(response => response.text())
            .then((dataStr) => {
                setConfigData(JSON.parse(dataStr));
            })
    }, []);

    return (
        <div style={{width: "100%", height: "100%", background: "black"}}>
            {
                configData
                    ?
                    (
                        <Carousel activeIndex={index} onSelect={handleSelect}>
                            {
                                configData.map((videoDat: any, num: number) => {
                                    return (
                                        <Carousel.Item key={num}>
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
                    )
                    :
                    (
                        <p>Loading...</p>
                    )
            }
        </div>
    );
}

export default HomePage;