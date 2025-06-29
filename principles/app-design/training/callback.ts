function add(v1: number, v2: number) {
	return v1 + v2;
}

function calculate(
	v1: number,
	v2: number,
	callback: (a: number, b: number) => number
): number {
	return callback(v1, v2);
}

const addResult = calculate(1, 2, add);
console.log(addResult);

function multiply(v1: number, v2: number): number {
	return v1 * v2;
}

const multiplyResult = calculate(2, 2, multiply);
console.log(multiplyResult);

// function greet() {
// 	console.log('hello');
// }

// const greet = () => {
// 	console.log('hello');
// };

// setTimeout(greet, 5000);

setTimeout(() => {
	console.log('hello');
}, 5000);
