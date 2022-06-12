import {Button, Carousel, Modal, Table} from "react-bootstrap";
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
    const [showModal, setShowModal] = useState(false);
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

    const csvResultTable = csvResult.map((row) =>
        <tr key={row.toString()}>
            {
                row.map((entry) => <td>{entry}</td>)
            }
        </tr>
    );

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
            height: "100%"
        }}>
            <h3 style={{color: "white"}}>Title</h3>
            <div style={{display: "flex", flexDirection: "row", flex: 0.9}}>
                <Video src={"video/vid1.mp4"}/>
                <Video src={"video/vid2.mp4"}/>
            </div>
            <Button variant="light" onClick={() => {
                setShowModal(true)}
            }>View Data</Button>

            <Modal show={showModal} onHide={() => {setShowModal(false)}}>
                <Modal.Header closeButton>
                    <Modal.Title>Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table>
                        <tbody>
                            {csvResultTable}
                        </tbody>
                    </Table>
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
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex: any, e: any) => {
        setIndex(selectedIndex);
    };

    return (
        <div style={{width: "100%", height: "100%", background: "black"}}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
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