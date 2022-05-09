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

    var code = ``;
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

    var code = ``;
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

    var code = ``;
    return code;
};

Blockly.Blocks["set_position"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("set position: ");
        
        this.appendValueInput("x_dis")
            .setCheck(Number)
            .appendField("x ")
        
        this.appendValueInput("y_dis")
            .setCheck(Number)
            .appendField("y ");
        
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#ff6699");
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
     

    var code = ``;
    return code;
};
