"use strict";

let adding = require("./add");
let subtract = require("./subtract");
let multiply = require("./multiply");
let divide = require("./divide");



let Calculator= {
	adding,
	subtract,
	multiply,
	divide
};

module.exports = Calculator;
