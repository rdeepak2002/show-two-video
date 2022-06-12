import {Button, Modal, Table} from "react-bootstrap";
import {useEffect, useState} from "react";
import Papa, {ParseResult} from "papaparse";
import Video from "./Video";

const VideoPair = (props: {title: string, dataSrc: string, video1Src: string, video2Src: string}) => {
    const [playVideo, setPlayVideo] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [csvResult, setCsvResult] = useState<Array<Array<String>>>([[]]);

    useEffect(() => {
        fetch(props.dataSrc)
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
            <h3 style={{color: "white"}}>{props.title}</h3>
            <div style={{display: "flex", flexDirection: "row", flex: 0.9}}>
                <Video src={props.video1Src} playVideo={playVideo} setPlayVideo={setPlayVideo}/>
                <Video src={props.video2Src} playVideo={playVideo} setPlayVideo={setPlayVideo}/>
            </div>
            <Button variant="light" onClick={() => {
                setShowModal(true)
            }
            }>View Data</Button>

            <Modal show={showModal} onHide={() => {
                setShowModal(false)
            }}>
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
                    <Button variant="secondary" onClick={() => {
                        setShowModal(false)
                    }}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default VideoPair;