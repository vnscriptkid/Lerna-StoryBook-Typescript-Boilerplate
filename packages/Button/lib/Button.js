"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
require("./Button.css");
const StyledBtn = styled_components_1.default.button `
    background: green;
    color: white;
`;
exports.MyBtn = () => (React.createElement(StyledBtn, null, "Good Job"));
const noop = () => { };
exports.Button = (props) => {
    const { label, onClick, disabled = false } = props;
    const disabledclass = disabled ? 'Button_disabled' : '';
    return (React.createElement("div", { className: `Button ${disabledclass}`, onClick: !disabled ? onClick : noop },
        React.createElement("span", null, label)));
};
const obj = { name: 'thanh', age: 22, job: 'dev' };
console.log(obj);
//# sourceMappingURL=Button.js.map