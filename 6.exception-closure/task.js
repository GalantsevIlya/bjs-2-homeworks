﻿function parseCount(number) {
	let amount = Number.parseFloat(number);
	if (isNaN(amount)) {
		throw new Error('Невалидное значение');
	}
	return amount;
}

function validateCount(number) {
	try {
		return parseCount(number)
	} catch (error) {
		return error;
	}
}

class Triangle {
	constructor(side1, side2, side3) {
		this.side1 = side1;
		this.side2 = side2;
		this.side3 = side3;

		if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
			throw new Error('Треугольник с такими сторонами не существует');
		}
	}

	get perimeter() {
		return this.side1 + this.side2 + this.side3;
	}

	get area() {
		const halfPer = this.perimeter / 2;
		return Number((Math.sqrt(halfPer * (halfPer - this.side1) * (halfPer - this.side2) * (halfPer - this.side3))).toFixed(3));
	}
}

const perimeterAndArea = {
	get perimeter() {
		return 'Ошибка! Треугольник не существует';
	},

	get area() {
		return 'Ошибка! Треугольник не существует';
	}
}

function getTriangle(side1, side2, side3) {
	try {
		return new Triangle(side1, side2, side3);
	} catch (error) {
		return perimeterAndArea;
	}
}