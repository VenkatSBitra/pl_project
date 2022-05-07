import Blockly from "blockly";

Blockly.Blocks["variable_set"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("define ")
            .appendField(new Blockly.FieldTextInput(""), "variableName")
            .appendField(" as ");
        this.appendValueInput("variableValue")
            .setCheck(null);
        this.setInputsInline(true);
        this.setNextStatement(true);
        this.setPreviousStatement(true);
        this.setColour(105);
    }
};

Blockly.JavaScript["variable_set"] = function (block) {
    let variableName = block.getFieldValue("variableName");
    let variableValue = Blockly.JavaScript.valueToCode(
        block,
        "variableValue",
        Blockly.JavaScript.ORDER_ATOMIC
    )
    let code = `let ${variableName} = ${variableValue};\n`;
    return code;
};

Blockly.Blocks["variable_modify"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("modify ")
            .appendField(new Blockly.FieldTextInput(""), "variableName")
            .appendField(" to ");
        this.appendValueInput("variableValue")
            .setCheck(null);
        this.setColour(105);        
        this.setInputsInline(true);
        this.setNextStatement(true);
        this.setPreviousStatement(true);
    }
};

Blockly.JavaScript["variable_modify"] = function (block) {
    let variableName = block.getFieldValue("variableName");
    let variableValue = Blockly.JavaScript.valueToCode(
        block,
        "variableValue",
        Blockly.JavaScript.ORDER_ATOMIC
    );
    let code = `${variableName} = ${variableValue};\n`;
    return code;
};

Blockly.Blocks["variable_get"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput(""), "value");
        this.setOutput(true);
        this.setColour(105);
    }
};

Blockly.JavaScript["variable_get"] = function (block) {
    let variableName = block.getFieldValue("value");
    var code = `${variableName}`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};