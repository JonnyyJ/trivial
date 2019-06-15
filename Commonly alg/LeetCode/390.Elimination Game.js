

function lastRemaining(n) {
	if (n === 1) {
		return 1;
	}

	// What pass we are on
	let pass = 1;

	// What the first number of the array would be
	let first = 1;

	while (n+1 > Math.pow(2, pass)) {

		if (pass === 1) {
			first = 2;
		} else if (pass % 2 === 0) {
			if (Math.floor(n / Math.pow(2, pass-1)) % 2 === 1) {
				first = first + Math.pow(2, pass-1);
			}
		} else if (pass % 2 === 1) {
			first = first + Math.pow(2, pass-1);
		}
		pass++;

	}


	return first;
	
}