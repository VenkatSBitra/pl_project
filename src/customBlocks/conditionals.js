import Blockly from "blockly";

Blockly.Blocks['if'] = {
    init: function () {
        this.appendDummyInput().appendField("if");
        this.setNextStatement(true);
    }
}

Blockly.JavaScript['if'] = function (block) {
    return 'if\n';
};

Blockly.Blocks['else_if'] = {
    init: function () {
        this.appendDummyInput().appendField("else if");
        this.setNextStatement(true);
        this.setPreviousStatement(true);
    }
}

Blockly.JavaScript['else_if'] = function (block) {
    return 'else_if\n';
};

Blockly.Blocks['else'] = {
    init: function () {
        this.appendDummyInput().appendField("else");
        this.setPreviousStatement(true);
    }
}

Blockly.JavaScript['else'] = function (block) {
    return 'else\n';
};

Blockly.Blocks["if_conditional"] = {
    init: function () {
        this.itemCount_ = 1;
        this.list_ = ['if'];
        this.prevCount_ = 1;
        this.updateShape_();
        this.setMutator(new Blockly.Mutator(['if', 'else_if', 'else']))
    },
    mutationToDom: function () {
        let container = Blockly.utils.xml.createElement('mutation');
        container.setAttribute('itemCount', this.itemCount_);
        container.setAttribute('prevCount', this.prevCount_);
        container.setAttribute('list', JSON.stringify(this.list_));
        return container;
    },
    domToMutation: function (xmlElement) {
        this.itemCount_ = parseInt(xmlElement.getAttribute('itemCount'), 10);
        this.prevCount_ = parseInt(xmlElement.getAttribute('prevCount'), 10);
        this.list_ = JSON.parse(xmlElement.getAttribute('list'))
        this.updateShape_();
    },
    decompose: function (workspace) {
        // This is a special sub-block that only gets created in the mutator UI.
        // It acts as our "top block"
        let blocks = [];

        blocks[0] = workspace.newBlock('if');
        blocks[0].initSvg();
        
        for (let i = 1; i < this.itemCount_; i++) {
            blocks[i] = workspace.newBlock(this.list_[i]);
            blocks[i].initSvg();
            blocks[i - 1].nextConnection.connect(blocks[i].previousConnection);
        }

        // And finally we have to return the top-block.
        return blocks[0];
    },
    compose: function (topBlock) {

        let code = Blockly.JavaScript.blockToCode(topBlock);
        
        const seg = code.split('\n'); seg.pop();
        
        this.prevCount_ = this.itemCount_;
        this.itemCount_ = seg.length;
        this.list_ = seg;

        this.updateShape_();
    },
    updateShape_: function () {
        for (let i = 0; i < Math.max(this.prevCount_, this.itemCount_); i++) {
            this.removeInput('statement_'+i, true);
            this.removeInput('condition_'+i, true);
        }
        this.list_.forEach(((e, i) => {
            if (e === 'if') {
                this.appendValueInput("condition_"+i)
                    .setCheck(null)
                    .appendField("if");
                this.appendStatementInput("statement_"+i)
                    .setCheck(null)
                    .appendField("then");
            } else if (e === 'else_if') {
                this.appendValueInput("condition_"+i)
                    .setCheck(null)
                    .appendField("else if");
                this.appendStatementInput("statement_"+i)
                    .setCheck(null)
                    .appendField("then");
            } else {
                this.appendStatementInput("statement_"+i)
                    .setCheck(null)
                    .appendField("else");
            }
        }))
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
    }
};

Blockly.JavaScript["if_conditional"] = function (block) {
    let conditions = block.list_.map((e, i) => {
        if (((e === 'if') || (e === 'else_if')) && block.getInput('condition_'+i)) {
            return Blockly.JavaScript.valueToCode(
                block,
                "condition_"+i,
                Blockly.JavaScript.ORDER_ATOMIC 
            );
        } else {
            return null;
        }
    });
    let statements = block.list_.map((e, i) => {
        return block.getInput('statement_'+i) ?
             Blockly.JavaScript.statementToCode(block, "statement_"+i) : null;
    });
    let code = '';
    block.list_.forEach((e, i) => {
        if (e === 'if') {
            code += `if (${conditions[i]}) {\n${statements[i]}\n} `
        } else if (e === 'else_if') {
            code += `else if (${conditions[i]}) {\n${statements[i]}\n} `
        } else {
            code += `else {\n${statements[i]}}\n`
        }
    })
    return code;
};
