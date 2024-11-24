"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let countD = b ** 2 - 4 * a * c;

	if (countD < 0) {
		return arr;
	} else if (countD === 0) {
		let onlyRoot = -b / (2 * a);
		arr.push(onlyRoot);
		return arr;
	} else {
		let fstRoot = (-b + Math.sqrt(countD)) / (2 * a);
		let sndRoot = (-b - Math.sqrt(countD)) / (2 * a);

		arr.push(fstRoot, sndRoot);
		return arr;
	}
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let coeff = percent / 100 / 12;
	let creditBody = amount - contribution;
	let monthPayment = creditBody * (coeff + (coeff / (((1 + coeff) ** countMonths) - 1)));
	let total = monthPayment * countMonths;
	let roundedTotal = parseFloat(total.toFixed(2));
	return roundedTotal;
}