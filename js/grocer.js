(function() {
	var milk = { name: "milk", price: 1.99};
	var cheese = {name: "Swiss Cheese", price: 4.99};
	var yogurt = {name: "Yogurt", price: 1.99};

	function pageReady() {

		var cart = new Cart(document.getElementById("numItems"), document.getElementById("items"));

		var btn1 = document.getElementById("milkbutton");
		var btn2 = document.getElementById("cheesebutton");
		var btn3 = document.getElementById("yogurtbutton");

		function addproduct(evt) {
			if (evt.target === btn1) {
				cart.addToCart(milk);
			} else if (evt.target === btn2) {
				cart.addToCart(cheese);
			} else if (evt.target === btn3) {
				cart.addToCart(yogurt);
			}
		}

		btn1.addEventListener("click", addproduct);
		btn2.addEventListener("click", addproduct);
		btn3.addEventListener("click", addproduct);

	}

	window.addEventListener("load", pageReady);
})();