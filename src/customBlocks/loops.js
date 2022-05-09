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

// Blockly.Blocks["loops_for"] = {
//     init: function () {
//         this.appendDummyInput();
//         this.appendValueInput("intial value")
//             .setCheck('Variable')
//             .appendField("from ")
//         this.appendValueInput("condition")
//             .setCheck(Boolean)
//             .appendField(" ; ")
//         this.appendValueInput("update")
//             .setCheck(Number)
//             .appendField(" ; ")
//         this.appendStatementInput("statement")
//             .setCheck(null)
//         this.setInputsInline(true);
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour("#ff3300");
//     }
// };

// Blockly.JavaScript["loops_while"] = function (block) {
//     let cond = Blockly.JavaScript.valueToCode(
//         block,
//         "condition",
//         Blockly.JavaScript.ORDER_ATOMIC 
//     );
//     let stmt = Blockly.JavaScript.statementToCode(block, "statement")
//     let code = `while (${cond}) {\n${stmt}}\n`;
//     return code;
// };

Blockly.Blocks["loops_for"] = {
    init: function () {
        this.appendDummyInput();
        this.appendValueInput("initial_value")
            .setCheck([Number,'Variable'])
            .appendField("from ")
        
        this.appendValueInput("final_value")
            .setCheck([Number,'Variable'])
            .appendField(" to ")
        this.appendStatementInput("statement")
            .setCheck(null)
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#ff3300");
    }
};

Blockly.JavaScript["loops_for"] = function (block) {
    let init_val = Blockly.JavaScript.valueToCode(
        block,
        "initial_value",
        Blockly.JavaScript.ORDER_ATOMIC 
    );
    let final_val = Blockly.JavaScript.valueToCode(
        block,
        "final_value",
        Blockly.JavaScript.ORDER_ATOMIC 
    );
    let stmt = Blockly.JavaScript.statementToCode(block, "statement");
    let iter_var = 'USER_VAR_' + Math.random().toString(36).slice(2); 
    let code = `for (let ${iter_var} = ${init_val}; ${iter_var} < ${final_val}; ${iter_var}${init_val < final_val ? '++' : '--'}) {\n${stmt}}\n`;
    return code;
};