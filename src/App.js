import "./App.css";
import React from "react";
import { Button, Row, Col, Input, Typography } from "antd";
import BlocklyApp from "./BlocklyApp";
import DrawCanvas from "./DrawCanvas";
const { TextArea } = Input;

export default function App() {
    const [command, setCommand] = React.useState('');

    React.useEffect(() => {
        setCommand('drawTurtle(context);');
    }, [])

    return (
        <>
            <Row>
                <Col span={14}>
                    <BlocklyApp />
                </Col>
                <Col span={10}>
                    <Button onClick={() => setCommand(document.getElementById("code").value)}>Run</Button>
                    <DrawCanvas command={command} width="625" height="600" style={{border: '1px solid black'}} />
                </Col>
            </Row>
        
            <Row>
                <Col span={24}>
                    <Typography>JavaScript Code:</Typography>
                    <Button onClick={() => setCommand(document.getElementById("code").value)}>Run</Button>
                    <TextArea 
                        id="code"
                        style={{height: '400px', width: '100%'}}
                        value=""
                    />
                </Col>
                
            </Row>
        </>
    );
}
