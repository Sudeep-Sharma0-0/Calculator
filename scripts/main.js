const display = document.getElementById("display");
display.value = "";
const oprndDisplay = document.getElementById("operand");
oprndDisplay.value = "";
const answer = document.getElementById("answer");
answer.value = "";

let operand, operator1, operator2;
let value = "",
	firstOperator = true;

function getClick(btn) {
	if (btn == "AC") {
		btn = "";
		
		display.value = btn;
		oprndDisplay.value = btn;
		answer.value = btn;

		firstOperator = true;
		operator1 = 0;
		operator2 = 0;
	} else if (btn == "DEL") {
		btn = "";
		display.value = display.value.substr(0, display.value.length - 1);
	} else if (isNaN(btn) && btn != ".") {
		if (firstOperator) {
			operator1 = Number(display.value);
			firstOperator = false;
		} else {
			calculate();
		}
		operand = btn;
		oprndDisplay.value = operand;
		display.value = "";
	} else {
		value = btn;
	}
	display.value += value;
	value = "";
}

function calculate() {
	if (operator1 == undefined) operator1 = 0;
	if (operator2 == undefined) operator2 = 0;
	if (operand == undefined) operand = "+";

	operator2 = Number(display.value);

	let ans = compute(operator1, operator2, operand);

	operator1 = ans;
	answer.value = ans;
	display.value = "";
}

function compute(optr1, optr2, oprnd) {
	switch (oprnd) {
		case "÷":
			return optr1 / optr2;
		case "x":
			return optr1 * optr2;
		case "+":
			return optr1 + optr2;
		case "-":
			return optr1 - optr2;
		default:
			return;
	}
}
