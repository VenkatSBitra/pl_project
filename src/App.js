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
                <Col span={6}>
                    <Button onClick={() => setCommand(document.getElementById("code").value)}>Run</Button>
                    <TextArea 
                        id="code"
                        style={{height: '400px', width: '100%'}}
                        value=""
                    />
                </Col>
                <Col span={18}>
                    <DrawCanvas command={command} width="1000" height="400" style={{border: '1px solid black'}} />
                </Col>
            </Row>
        </>
    );
}
