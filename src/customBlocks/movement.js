import Blockly from "blockly";

const delay = 250;

Blockly.Blocks["move"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Move")
        this.appendValueInput("steps")
            .setCheck([Number, 'Variable'])
        this.appendDummyInput()
            .appendField("steps")
            .appendField(new Blockly.FieldDropdown([
                ['in forward direction', 'f'],
                ['in backward direction', 'b']
            ]), 'dir');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);        
        this.setInputsInline(true);
        this.setColour("#00b377");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript["move"] = function (block) {
    let steps = Blockly.JavaScript.valueToCode(
        block,
        "steps",
        Blockly.JavaScript.ORDER_ATOMIC 
    );
    let dir = block.getFieldValue("dir");    
    let check = isNaN(steps);
    let code = `loadCanvasDrawing(context);draw("${dir === 'f' ? 'fd' : 'bk'} ${(!check) ? (steps + '"') : ('" + (' + steps + ').toString(10)')}, context);saveCanvasDrawing(context, canvas);drawTurtle(context);await sleep(${delay});\n`;
    return code;
};

Blockly.Blocks["rotate"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Rotate")
        this.appendValueInput("degrees")
            .setCheck([Number, 'Variable'])
        this.appendDummyInput()
            .appendField("degrees")
            .appendField(new Blockly.FieldDropdown([
                ['in left direction', 'l'],
                ['in right direction', 'r']
            ]), 'dir');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setColour("#00b377");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript["rotate"] = function (block) {
    let degrees = Blockly.JavaScript.valueToCode(
        block,
        "degrees",
        Blockly.JavaScript.ORDER_ATOMIC 
    );
    let dir = block.getFieldValue("dir");
    let check = isNaN(degrees);
    let code = `loadCanvasDrawing(context);draw("${dir === 'l' ? 'lt' : 'rt'} ${(!check) ? (degrees + '"') : ('" + (' + degrees + ').toString(10)')}, context);saveCanvasDrawing(context, canvas);drawTurtle(context);await sleep(${delay});\n`;
    return code;
};

Blockly.Blocks["set_position"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Translate: ");
        
        this.appendValueInput("x_dis")
            .setCheck(Number)
            .appendField("x ")
        
        this.appendValueInput("y_dis")
            .setCheck(Number)
            .appendField("y ");
        
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#00b377");
    }
};

Blockly.JavaScript["set_position"] = function (block) {
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
     
    let code = `context.translate(${x_dis}, ${y_dis});drawTurtle(context);`;
    return code;
};

Blockly.Blocks['penup'] = {
    init: function () {
        this.appendDummyInput().appendField("Pen Up");
        this.setNextStatement(true);
        this.setPreviousStatement(true);
        this.setColour("#00b377");
    }
}

Blockly.JavaScript['penup'] = function (block) {
    return 'penup(context);\n';
};

Blockly.Blocks['pendown'] = {
    init: function () {
        this.appendDummyInput().appendField("Pen Down");
        this.setNextStatement(true);
        this.setPreviousStatement(true);
        this.setColour("#00b377");
    }
}

Blockly.JavaScript['pendown'] = function (block) {
    return 'pendown(context);\n';
};
