import Blockly from "blockly";

Blockly.Blocks["move"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Move")
            .appendField(new Blockly.FieldNumber(0), "steps")
            .appendField("steps")
            .appendField(new Blockly.FieldDropdown([
                ['in forward direction', 'f'],
                ['in backward direction', 'b']
            ]), 'dir');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript["move"] = function (block) {
    let steps = block.getFieldValue("steps");
    let dir = block.getFieldValue("dir");
    let code = `draw("${dir === 'f' ? 'fd' : 'bk'} ${steps}", context);\n`;
    return code;
};

Blockly.Blocks["rotate"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Rotate")
            .appendField(new Blockly.FieldNumber(0), "degrees")
            .appendField("degrees")
            .appendField(new Blockly.FieldDropdown([
                ['in left direction', 'l'],
                ['in right direction', 'r']
            ]), 'dir');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript["rotate"] = function (block) {
    let degrees = block.getFieldValue("degrees");
    let dir = block.getFieldValue("dir");
    let code = `draw("${dir === 'l' ? 'lt' : 'rt'} ${degrees}", context);\n`;
    return code;
};
