import {Button, Carousel, Modal} from "react-bootstrap";
import {useEffect, useState} from "react";
import Papa, {ParseResult} from "papaparse";

const Video = (props: { src: string }) => {
    return (
        <video width="50%" height="100%" controls autoPlay={true} muted={true}>
            <source src={props.src} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
    );
}

const VideoPair = () => {
    const [showModal, setShowModal] = useState(true);
    const [csvResult, setCsvResult] = useState<Array<Array<String>>>([[]]);

    useEffect(() => {
        fetch("data/data.csv")
            .then(response => response.text())
            .then((dataStr) => {
                const parseResult: ParseResult<any> = Papa.parse(dataStr);
                const csvResult: Array<Array<string>> = parseResult.data;
                setCsvResult(csvResult);
            })
    }, []);

    // const csvResultStr = csvResult.map((row) =>
    //     <tr key={row.toString()}>
    //         <td>
    //             {row.toString()}
    //         </td>
    //     </tr>
    // );

    return (
        <div style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
            height: "100%"
        }}>
            <Video src={"video/vid1.mp4"}/>
            <Video src={"video/vid2.mp4"}/>

            <Modal show={showModal} onHide={() => {setShowModal(false)}}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table>
                        {
                            csvResult.map((row) =>
                                <tr key={row.toString()}>
                                    <td>
                                        {row.toString()}
                                    </td>
                                </tr>
                            )
                        }
                    </table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => {setShowModal(false)}}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

const HomePage = () => {
    return (
        <div style={{width: "100%", height: "100%", background: "black"}}>
            <Carousel>
                <Carousel.Item>
                    <VideoPair/>
                </Carousel.Item>
                <Carousel.Item>
                    <VideoPair/>
                </Carousel.Item>
                <Carousel.Item>
                    <VideoPair/>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default HomePage;