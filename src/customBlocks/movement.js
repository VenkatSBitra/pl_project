import Blockly from "blockly";

Blockly.Blocks["move"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Move")
            .appendField(new Blockly.FieldNumber(0), "steps")
            .appendField("steps");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript["move"] = function (block) {
    let steps = block.getFieldValue("steps");
    let code = `console.log(${steps});\n`;
    return code;
};
