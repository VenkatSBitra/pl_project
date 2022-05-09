import Blockly from "blockly";

Blockly.Blocks["equals_logic"] = {
    init: function () {
        this.appendDummyInput();
        this.appendValueInput("number1")
            .setCheck([Number, 'Variable'])
        this.appendValueInput("number2")
            .setCheck([Number, 'Variable'])
            .appendField(" = ");;
        this.setInputsInline(true);
        this.setOutput(true, Boolean);
        this.setColour("#990099");
    }
};

Blockly.JavaScript["equals_logic"] = function (block) {
    let number1 = Blockly.JavaScript.valueToCode(
        block,
        "number1",
        Blockly.JavaScript.ORDER_EQUALITY 
    );
    let number2 = Blockly.JavaScript.valueToCode(
        block,
        "number2",
        Blockly.JavaScript.ORDER_EQUALITY 
    );
    var code = `${number1} === ${number2}`;
    return [code, Blockly.JavaScript.ORDER_EQUALITY];
};

Blockly.Blocks["not_equals_logic"] = {
    init: function () {
        this.appendDummyInput();
        this.appendValueInput("number1")
            .setCheck([Number, 'Variable'])
        this.appendValueInput("number2")
            .setCheck([Number, 'Variable'])
            .appendField(" != ");;
        this.setInputsInline(true);
        this.setOutput(true, Boolean);
        this.setColour("#990099");
    }
};

Blockly.JavaScript["not_equals_logic"] = function (block) {
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
    var code = `${number1} !== ${number2}`;
    return [code, Blockly.JavaScript.ORDER_EQUALITY];
};

Blockly.Blocks["less_than_logic"] = {
    init: function () {
        this.appendDummyInput();
        this.appendValueInput("number1")
            .setCheck([Number, 'Variable'])
        this.appendValueInput("number2")
            .setCheck([Number, 'Variable'])
            .appendField(" < ");;
        this.setInputsInline(true);
        this.setOutput(true, Boolean);
        this.setColour("#990099");
    }
};

Blockly.JavaScript["less_than_logic"] = function (block) {
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
    var code = `${number1} < ${number2}`;
    return [code, Blockly.JavaScript.ORDER_RELATIONAL];
};

Blockly.Blocks["greater_than_logic"] = {
    init: function () {
        this.appendDummyInput();
        this.appendValueInput("number1")
            .setCheck([Number, 'Variable'])
        this.appendValueInput("number2")
            .setCheck([Number, 'Variable'])
            .appendField(" > ");;
        this.setInputsInline(true);
        this.setOutput(true, Boolean);
        this.setColour("#990099");
    }
};

Blockly.JavaScript["greater_than_logic"] = function (block) {
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
    var code = `${number1} > ${number2}`;
    return [code, Blockly.JavaScript.ORDER_RELATIONAL];
};

Blockly.Blocks["less_than_equals_logic"] = {
    init: function () {
        this.appendDummyInput();
        this.appendValueInput("number1")
            .setCheck([Number, 'Variable'])
        this.appendValueInput("number2")
            .setCheck([Number, 'Variable'])
            .appendField(" <= ");;
        this.setInputsInline(true);
        this.setOutput(true, Boolean);
        this.setColour("#990099");
    }
};

Blockly.JavaScript["less_than_equals_logic"] = function (block) {
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
    var code = `${number1} <= ${number2}`;
    return [code, Blockly.JavaScript.ORDER_RELATIONAL];
};

Blockly.Blocks["greater_than_equals_logic"] = {
    init: function () {
        this.appendDummyInput();
        this.appendValueInput("number1")
            .setCheck([Number, 'Variable'])
        this.appendValueInput("number2")
            .setCheck([Number, 'Variable'])
            .appendField(" >= ");;
        this.setInputsInline(true);
        this.setOutput(true, Boolean);
        this.setColour("#990099");
    }
};

Blockly.JavaScript["greater_than_equals_logic"] = function (block) {
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
    var code = `${number1} >= ${number2}`;
    return [code, Blockly.JavaScript.ORDER_RELATIONAL];
};


Blockly.Blocks["and_operation"] = {
    init: function () {
        this.appendDummyInput();
        this.appendValueInput("number1")
            .setCheck([Boolean, 'Variable'])

        this.appendValueInput("number2")
            .setCheck([Boolean, 'Variable'])
            .appendField(" and ");;
        this.setInputsInline(true);
        this.setOutput(true);
        this.setColour("#990099");
    }
};

Blockly.JavaScript["and_operation"] = function (block) {
    let number1 = Blockly.JavaScript.valueToCode(
        block,
        "number1",
        Blockly.JavaScript.ORDER_LOGICAL_AND
    );
    let number2 = Blockly.JavaScript.valueToCode(
        block,
        "number2",
        Blockly.JavaScript.ORDER_LOGICAL_AND
    );
    var code = `${number1} && ${number2}`;
    return [code, Blockly.JavaScript.ORDER_LOGICAL_AND];
};

Blockly.Blocks["or_operation"] = {
    init: function () {
        this.appendDummyInput();
        this.appendValueInput("number1")
            .setCheck([Boolean, 'Variable'])

        this.appendValueInput("number2")
            .setCheck([Boolean, 'Variable'])
            .appendField(" or ");;
        this.setInputsInline(true);
        this.setOutput(true);
        this.setColour("#990099");
    }
};

Blockly.JavaScript["or_operation"] = function (block) {
    let number1 = Blockly.JavaScript.valueToCode(
        block,
        "number1",
        Blockly.JavaScript.ORDER_LOGICAL_OR
    );
    let number2 = Blockly.JavaScript.valueToCode(
        block,
        "number2",
        Blockly.JavaScript.ORDER_LOGICAL_OR
    );
    var code = `${number1} || ${number2}`;
    return [code, Blockly.JavaScript.ORDER_LOGICAL_OR];
};

Blockly.Blocks["not_operation"] = {
    init: function () {
        this.appendDummyInput();
        this.appendValueInput("number2")
            .setCheck([Boolean, 'Variable'])
            .appendField(" not ");;
        this.setInputsInline(true);
        this.setOutput(true);
        this.setColour("#990099");
    }
};

Blockly.JavaScript["not_operation"] = function (block) {
    let number2 = Blockly.JavaScript.valueToCode(
        block,
        "number2",
        Blockly.JavaScript.ORDER_LOGICAL_OR
    );
    var code = `! (${number2})`;
    return [code, Blockly.JavaScript.ORDER_LOGICAL_OR];
};