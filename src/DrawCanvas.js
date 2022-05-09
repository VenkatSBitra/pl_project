import React from "react";

const DrawCanvas = props => {
    const canvasRef = React.useRef(null);
    let { command, resetFn, ...rest} = props;

    React.useEffect(() => {
        if (command.includes('while')) {
            if (!window.confirm('Are you sure all while loops are terminating?')) {
                command = 'Ensure all the blocks and statements are filled'
            }
        }
        if (command === 'Ensure all the blocks and statements are filled') {}
        else {
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
            context.restore();
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.save();
            context.translate(canvas.width / 2, canvas.height / 2);
            try {
                eval(command); 
            } catch (e) {
                if (e instanceof SyntaxError) {
                    alert(e.message);
                } else { 
                    alert(e)
                }
            }
        }
    }, [command]);

    const parseCmd = command => {
        let [dir, value] = command.split(" ")
        let angle = 0
        let resultDir = ""
        value = Number(value)
        switch (dir.toUpperCase()) {
            case "FD":
                resultDir = "FORWARD"
                break
            case "BK":
                resultDir = "BACKWARD"
                angle = 180
                break
            case "LT":
                resultDir = "LEFT"
                angle = -value
                break
            case "RT":
                resultDir = "RIGHT"
                angle = value
                break
        }
        return {
            dir: resultDir,
            value,
            angle: deg2Rad(angle),
        }
    }

    const deg2Rad = deg => {
        return (deg * Math.PI) / 180
    }

    const drawTurtle = ctx => {
        ctx.beginPath()
        ctx.moveTo(-7, -7)
        ctx.lineTo(0, 7)
        ctx.lineTo(7, -7)
        ctx.closePath()
        ctx.stroke()
    }

    const draw = (command, ctx) => {
        const { dir, angle, value } = parseCmd(command)
        console.log(dir, angle, value)
        ctx.rotate(angle)
        if (dir === "FORWARD" || dir === "BACKWARD") {
            ctx.beginPath()
            ctx.moveTo(0, 0)
            ctx.lineTo(0, value)
            ctx.translate(0, value)
            ctx.closePath()
            ctx.stroke()
        }
    }

    return <canvas ref={canvasRef} {...rest} />
}

export default DrawCanvas;