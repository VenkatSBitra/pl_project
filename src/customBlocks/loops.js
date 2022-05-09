import Blockly from "blockly";

Blockly.Blocks["loops_while"] = {
    init: function () {
        this.appendDummyInput();
        this.appendValueInput("condition")
            .setCheck(Boolean)
            .appendField("while ");
        this.appendStatementInput("statement")
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#ff3300");
    }
};

Blockly.JavaScript["loops_while"] = function (block) {
    let cond = Blockly.JavaScript.valueToCode(
        block,
        "condition",
        Blockly.JavaScript.ORDER_ATOMIC 
    );
    let stmt = Blockly.JavaScript.statementToCode(block, "statement")
    let code = `while (${cond}) {\n${stmt}}\n`;
    return code;
};