import React from "react";

const DrawCanvas = props => {
    const canvasRef = React.useRef(null);
    const [pos, setPos] = React.useState([100, 100]);
    const [rot, setRot] = React.useState(0);
    const { command, ...rest} = props;

    React.useEffect(() => {
        if (command === 'Ensure all the blocks and statements are filled') {}
        else {
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
            const move = () => eval('run()');
            move();
        }
    }, [command])

    const run = () => {
        console.log("Run")
    }

    return <canvas ref={canvasRef} {...rest} />
}

export default DrawCanvas;