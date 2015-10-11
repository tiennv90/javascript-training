function Cart(divNumItems, divItems) {
	var cart = [];
	var cartTotal = 0;
	var cartCount = 0;

	var numItems = divNumItems;
	var items = divItems;

	this.addToCart = function (product) {
		if (cart.length == 0) {
			addNewProduct(product);
		} else {
			if (findProductInCart(product) == null) {
				addNewProduct(product);
			}
		}

		computeCart();
		updateCartDisplay();
		console.log(cart);
		console.log(cart.length);
	}

	function addNewProduct(product) {
		product.quantity = 1;
		cart.push(product);		
	}

	function computeCart() {
		cartTotal = 0;
		cartCount = 0;
		for (i = 0; i < cart.length; i++) {
			var itemTotal = cart[i].price * cart[i].quantity;
			cartTotal += itemTotal;
			cartCount += cart[i].quantity;
		}

		cartTotal = Math.round(cartTotal * 100) / 100;
		console.log(cartTotal);
		console.log(cartCount);
	}

	function updateCartDisplay() {
		numItems.innerHTML = "You have " + cartCount + " item(s) in your cart";
		items.innerHTML = "";
		for (i = 0; i < cart.length; i++) {
			var productLine = cart[i].quantity + " " + cart[i].name + "</br>";
			items.innerHTML += productLine;
		}
		items.innerHTML += "Your cart total is: " + cartTotal;
	}

	function findProductInCart(product) {
		for (i = 0; i < cart.length; i++) {
			if (cart[i].name == product.name) {
				product.quantity ++;
				return product;
			}
		}
		return null;
	}
}