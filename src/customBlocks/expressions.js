import Blockly from "blockly";

Blockly.Blocks["text_expression"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("String: ")
            .appendField(new Blockly.FieldTextInput(""), "value");
        this.setOutput(true, String);
        this.setColour(105);
    }
};

Blockly.JavaScript["text_expression"] = function (block) {
    let variableName = block.getFieldValue("value");
    var code = `"${variableName}"`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks["number_expression"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Number: ")
            .appendField(new Blockly.FieldNumber(0), "value");
        this.setOutput(true, Number);
        this.setColour(105);
    }
};

Blockly.JavaScript["number_expression"] = function (block) {
    let variableName = block.getFieldValue("value");
    var code = `${variableName}`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks["boolean_expression"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Boolean: ")
            .appendField(new Blockly.FieldDropdown([
                ['true', 'true'],
                ['false', 'false']
            ]), "value");
        this.setOutput(true);
        this.setColour(105);
    }
};

Blockly.JavaScript["boolean_expression"] = function (block) {
    let variableName = block.getFieldValue("value");
    var code = `${variableName}`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};