const countTo = (n, fn) => {
	const now = new Date();

	for (let i = 0; i < n; i++) {
		fn(i);
	}

	return [n, new Date() - now];
};

const counts = [
	10,
	100,
	500,
	1000,
	1500,
	2000,
	2500,
	3000,
	3500,
	4000,
	4500,
	5000,
	6000,
	7000,
	8000,
	9000,
	10000,
	20000,
	30000,
	40000,
	50000,
	60000,
	70000,
	80000,
	90000,
	100000
];

const timesWithoutLogging = () => {
	return counts.map((n) => {
		console.log("starting without for", n);
		return countTo(n, () => {});
	});
};
const timesWithLogging = () => {
	return counts.map((n) => {
		console.log("starting with for", n);
		return countTo(n, (i) => {
			console.log(i);
		});
	});
};

console.log(timesWithoutLogging());
console.log(timesWithLogging());
