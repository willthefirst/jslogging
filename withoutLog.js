const countTo = (n) => {
	const now = new Date();

	for (let i = 0; i < n; i++) {
		// Don't do nothing.
	}

	console.log("Finished in", new Date() - now, "ms");
};

countTo(1000000);

