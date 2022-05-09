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
        this.setColour(230);
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
    let code = `draw("${dir === 'f' ? 'fd' : 'bk'} ${steps}", context);await sleep(${delay});\n`;
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
        this.setColour(230);
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
    let code = `draw("${dir === 'l' ? 'lt' : 'rt'} ${degrees}", context);await sleep(${delay});\n`;
    return code;
};
