(function() {
	var makeRandomNumber = function() {
		var number = Math.random();
		var number10 = number * 10;
		return Math.ceil(number10);
	}

	console.log(makeRandomNumber());
})();