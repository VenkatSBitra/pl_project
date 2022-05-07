import Blockly from "blockly";

Blockly.Blocks["move"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Move")
            .appendField(new Blockly.FieldTextInput(""), "steps")
            .appendField("steps");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript["move"] = function (block) {
    let variableName = block.getFieldValue("variableName");
    let variableValue = Blockly.JavaScript.valueToCode(
        block,
        "variableValue",
        Blockly.JavaScript.ORDER_ATOMIC
    )
    let code = `let ${variableName} = ${variableValue};\n`;
    return code;
};
