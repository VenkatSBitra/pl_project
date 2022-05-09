import Blockly from "blockly";

Blockly.Blocks["add_operation"] = {
    init: function () {
        this.appendDummyInput();
        this.appendValueInput("number1")
            .setCheck(Number)
            .appendField("Add ")
        this.appendValueInput("number2")
            .setCheck(Number)
            .appendField(" with ");;
        this.setInputsInline(true);
        this.setOutput(true);
        this.setColour(105);
    }
};

Blockly.JavaScript["add_operation"] = function (block) {
    let number1 = Blockly.JavaScript.valueToCode(
        block,
        "number1",
        Blockly.JavaScript.ORDER_ADDITION 
    );
    let number2 = Blockly.JavaScript.valueToCode(
        block,
        "number2",
        Blockly.JavaScript.ORDER_ADDITION 
    );
    var code = `${number1} + ${number2}`;
    return [code, Blockly.JavaScript.ORDER_ADDITION];
};

Blockly.Blocks["sub_operation"] = {
    init: function () {
        this.appendDummyInput();
        this.appendValueInput("number1")
            .setCheck(Number)
            .appendField("Subtract ")
        this.appendValueInput("number2")
            .setCheck(Number)
            .appendField(" with ");;
        this.setInputsInline(true);
        this.setOutput(true);
        this.setColour(105);
    }
};

Blockly.JavaScript["sub_operation"] = function (block) {
    let number1 = Blockly.JavaScript.valueToCode(
        block,
        "number1",
        Blockly.JavaScript.ORDER_SUBTRACTION 
    );
    let number2 = Blockly.JavaScript.valueToCode(
        block,
        "number2",
        Blockly.JavaScript.ORDER_SUBTRACTION 
    );
    var code = `${number1} - ${number2}`;
    return [code, Blockly.JavaScript.ORDER_SUBTRACTION];
};

Blockly.Blocks["mul_operation"] = {
    init: function () {
        this.appendDummyInput();
        this.appendValueInput("number1")
            .setCheck(Number)
            .appendField("Multiply ")
        this.appendValueInput("number2")
            .setCheck(Number)
            .appendField(" with ");;
        this.setInputsInline(true);
        this.setOutput(true);
        this.setColour(105);
    }
};

Blockly.JavaScript["mul_operation"] = function (block) {
    let number1 = Blockly.JavaScript.valueToCode(
        block,
        "number1",
        Blockly.JavaScript.ORDER_MULTIPLICATION 
    );
    let number2 = Blockly.JavaScript.valueToCode(
        block,
        "number2",
        Blockly.JavaScript.ORDER_MULTIPLICATION 
    );
    var code = `${number1} * ${number2}`;
    return [code, Blockly.JavaScript.ORDER_MULTIPLICATION];
};

Blockly.Blocks["div_operation"] = {
    init: function () {
        this.appendDummyInput();
        this.appendValueInput("number1")
            .setCheck(Number)
            .appendField("Divide ")
        this.appendValueInput("number2")
            .setCheck(Number)
            .appendField(" with ");;
        this.setInputsInline(true);
        this.setOutput(true);
        this.setColour(105);
    }
};

Blockly.JavaScript["div_operation"] = function (block) {
    let number1 = Blockly.JavaScript.valueToCode(
        block,
        "number1",
        Blockly.JavaScript.ORDER_DIVISION 
    );
    let number2 = Blockly.JavaScript.valueToCode(
        block,
        "number2",
        Blockly.JavaScript.ORDER_DIVISION 
    );
    var code = `${number1} / ${number2}`;
    return [code, Blockly.JavaScript.ORDER_DIVISION];
};

Blockly.Blocks["mod_operation"] = {
    init: function () {
        this.appendDummyInput();
        this.appendValueInput("number1")
            .setCheck(Number)
            .appendField("Modulo of ")
        this.appendValueInput("number2")
            .setCheck(Number)
            .appendField(" with ");;
        this.setInputsInline(true);
        this.setOutput(true);
        this.setColour(105);
    }
};

Blockly.JavaScript["mod_operation"] = function (block) {
    let number1 = Blockly.JavaScript.valueToCode(
        block,
        "number1",
        Blockly.JavaScript.ORDER_MODULUS
    );
    let number2 = Blockly.JavaScript.valueToCode(
        block,
        "number2",
        Blockly.JavaScript.ORDER_MODULUS 
    );
    var code = `${number1} % ${number2}`;
    return [code, Blockly.JavaScript.ORDER_MODULUS];
};

Blockly.Blocks["inc_operation"] = {
    init: function () {
        this.appendDummyInput();
        this.appendValueInput("number1")
            .setCheck('Variable')
            .appendField("Increment ");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(105);
    }
};

Blockly.JavaScript["inc_operation"] = function (block) {
    let number1 = Blockly.JavaScript.valueToCode(
        block,
        "number1",
        Blockly.JavaScript.ORDER_ATOMIC
    );
    var code = `${number1} = ${number1} + 1;\n`;
    return code;
};

Blockly.Blocks["dec_operation"] = {
    init: function () {
        this.appendDummyInput();
        this.appendValueInput("number1")
            .setCheck('Variable')
            .appendField("Decrement ");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(105);
    }
};

Blockly.JavaScript["dec_operation"] = function (block) {
    let number1 = Blockly.JavaScript.valueToCode(
        block,
        "number1",
        Blockly.JavaScript.ORDER_ATOMIC
    );
    var code = `${number1} = ${number1} - 1;\n`;
    return code;
};