import React from 'react';

import ReactBlockly from "react-blockly";
import Blockly from "blockly";
import * as fs from "browserify-fs";

import "./customBlocks/expressions";
import "./customBlocks/operations";
import "./customBlocks/variables";
import "./customBlocks/logic"
import "./customBlocks/conditionals";
import "./customBlocks/loops";
import "./customBlocks/movement";

const BlocklyApp = () => {
    const initialXml =
        '<xml xmlns="https://developers.google.com/blockly/xml"></xml>';

    const toolboxCategories = [
        {
            name: "Variables",
            colour: "#5CA699",
            blocks: [
                {
                    type: "variable_set"
                },
                {
                    type: "variable_modify"
                },
                {
                    type: "variable_get"
                }
            ]
        },
        {
            name: "Expressions",
            colour: "#5CA699",
            blocks: [
                {
                    type: "text_expression"
                },
                {
                    type: "number_expression"
                },
                {
                    type: "boolean_expression"
                }
            ]
        },
        {
            name: "Operations",
            colour: "#5C81A6",
            blocks: [
                {
                    type: "add_operation"
                },
                {
                    type: "sub_operation"
                },
                {
                    type: "mul_operation"
                },
                {
                    type: "div_operation"
                },
                {
                    type: "mod_operation"
                },
                {
                    type: "inc_operation"
                },
                {
                    type: "dec_operation"
                }
            ]
        },
        {
            name: "Logic",
            colour: "#5C81A6",
            blocks: [
                {
                    type: "equals_logic"
                },
                {
                    type: "not_equals_logic"
                },
                {
                    type: "less_than_logic"
                },
                {
                    type: "greater_than_logic"
                },
                {
                    type: "less_than_equals_logic"
                },
                {
                    type: "greater_than_equals_logic"
                },
                {
                    type: "and_operation"
                },
                {
                    type: "or_operation"
                },
                {
                    type: "not_operation"
                }
            ]
        },
        {
            name: "Control",
            colour: "#5C81A6",
            blocks: [
                {
                    type: "if_conditional"
                },
                {
                    type: "loops_while"
                }
            ]
        },
        {
            name: "Motion",
            colour: "#5C81A6",
            blocks: [
                {
                    type: "move"
                },
                {
                    type: "rotate"
                }
            ]
        }
    ];

    function workspaceDidChange(workspace) {
        const topBlocks = workspace.getTopBlocks(true);
        let valid = true;
        topBlocks.forEach(e => {
            valid = valid & (e.allInputsFilled())
        })
        let code = null;
        if (valid) {
            code = 'async function USER_BLOCK_FN() {\n' + Blockly.JavaScript.workspaceToCode(workspace) + 'drawTurtle(context);\n}\nUSER_BLOCK_FN();';
            if (code.includes('let  =')) {
                code = 'Ensure all the blocks and statements are filled'
            }
        } else {
            code = 'Ensure all the blocks and statements are filled'
        }
        fs.writeFile("./bot.js", code);
        if (document.getElementById("code")) document.getElementById("code").value = code;
    }

    return (
        <>
            <ReactBlockly
                toolboxCategories={toolboxCategories}
                initialXml={initialXml}
                wrapperDivClassName="fill-height"
                workspaceConfiguration={{
                    grid: {
                        spacing: 20,
                        length: 3,
                        colour: "#ccc",
                        snap: true
                    }
                }}
                workspaceDidChange={workspaceDidChange}
            />
        </>
    )
}

export default BlocklyApp;
