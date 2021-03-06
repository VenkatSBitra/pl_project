import Blockly from "blockly";

Blockly.Blocks["square"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Draw Square ");
        this.appendValueInput("side_length")
            .setCheck(Number)
            .appendField("Side Length ")
        this.appendValueInput("x_dis")
            .setCheck(Number)
            .appendField("x dispalcement ")
        this.appendValueInput("y_dis")
            .setCheck(Number)
            .appendField("y dispalcement ");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#ff6699");
    }
};

Blockly.JavaScript["square"] = function (block) {
    let side_length = Blockly.JavaScript.valueToCode(
        block,
        "side_length",
        Blockly.JavaScript.ORDER_ADDITION 
    );
     
    let x_dis = Blockly.JavaScript.valueToCode(
        block,
        "x_dis",
        Blockly.JavaScript.ORDER_ADDITION 
    );

    let y_dis = Blockly.JavaScript.valueToCode(
        block,
        "y_dis",
        Blockly.JavaScript.ORDER_ADDITION 
    );

    let code = `
        loadCanvasDrawing(context);
        context.translate(${x_dis}, ${y_dis});
        for (let USER_VAR_SQUARE_LOOP = 0; USER_VAR_SQUARE_LOOP < 4; USER_VAR_SQUARE_LOOP++) {
            draw("fd ${side_length}", context);
            draw("lt 90", context);
        }
        context.translate(${-1 * x_dis}, ${-1 * y_dis});
        saveCanvasDrawing(context, canvas);drawTurtle(context);
    `;
    return code;
};

Blockly.Blocks["rectangle"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Draw Rectangle ");

        this.appendValueInput("length")
            .setCheck(Number)
            .appendField("Length ")
        
        this.appendValueInput("breadth")
            .setCheck(Number)
            .appendField("Breadth ")
        
        this.appendValueInput("x_dis")
            .setCheck(Number)
            .appendField("x dispalcement ")
        
        this.appendValueInput("y_dis")
            .setCheck(Number)
            .appendField("y dispalcement ");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#ff6699");
    }
};

Blockly.JavaScript["rectangle"] = function (block) {
    let length = Blockly.JavaScript.valueToCode(
        block,
        "length",
        Blockly.JavaScript.ORDER_ADDITION 
    );

    let breadth = Blockly.JavaScript.valueToCode(
        block,
        "breadth",
        Blockly.JavaScript.ORDER_ADDITION 
    );

    let x_dis = Blockly.JavaScript.valueToCode(
        block,
        "x_dis",
        Blockly.JavaScript.ORDER_ADDITION 
    );

    let y_dis = Blockly.JavaScript.valueToCode(
        block,
        "y_dis",
        Blockly.JavaScript.ORDER_ADDITION 
    );

    let code = `
        loadCanvasDrawing(context);
        context.translate(${x_dis}, ${y_dis});
        for (let USER_VAR_SQUARE_LOOP = 0; USER_VAR_SQUARE_LOOP < 4; USER_VAR_SQUARE_LOOP++) {
            if (USER_VAR_SQUARE_LOOP % 2 === 0) draw("fd ${length}", context);
            else draw("fd ${breadth}", context);
            draw("lt 90", context);
        }
        context.translate(${-1 * x_dis}, ${-1 * y_dis});
        saveCanvasDrawing(context, canvas);drawTurtle(context);
    `;
    return code;
};


Blockly.Blocks["circle"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Draw Circle ");

        this.appendValueInput("radius")
            .setCheck(Number)
            .appendField("Radius ")
        
        this.appendValueInput("x_dis")
            .setCheck(Number)
            .appendField("x dispalcement ")
        
        this.appendValueInput("y_dis")
            .setCheck(Number)
            .appendField("y dispalcement ");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#ff6699");
    }
};

Blockly.JavaScript["circle"] = function (block) {
    let radius = Blockly.JavaScript.valueToCode(
        block,
        "radius",
        Blockly.JavaScript.ORDER_ADDITION 
    );

    let x_dis = Blockly.JavaScript.valueToCode(
        block,
        "x_dis",
        Blockly.JavaScript.ORDER_ADDITION 
    );

    let y_dis = Blockly.JavaScript.valueToCode(
        block,
        "y_dis",
        Blockly.JavaScript.ORDER_ADDITION 
    );

    let code = `
        loadCanvasDrawing(context);
        context.beginPath();
        context.arc(${x_dis}, ${y_dis}, ${radius}, 0, 2 * Math.PI);
        context.stroke();
        saveCanvasDrawing(context, canvas);drawTurtle(context);
    `;
    return code;
};

