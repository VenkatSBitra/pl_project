import "./App.css";
import React from "react";
import { Button, Row, Col, Input } from "antd";
import BlocklyApp from "./BlocklyApp";
import DrawCanvas from "./DrawCanvas";
const { TextArea } = Input;

export default function App() {
    const [command, setCommand] = React.useState('');

    return (
        <>
            <BlocklyApp />
            <Row>
                <Col>
                    <TextArea 
                        id="code"
                        style={{height: '400px', width: '400px'}}
                        value=""
                    />
                    <Button onClick={() => setCommand(document.getElementById("code").value)}>Run</Button>
                </Col>
                <Col>
                    <DrawCanvas command={command} />
                </Col>
            </Row>
        </>
    );
}
