var cart = {
    customer : 'July',
    subTotal : function () {
        console.log("subtotal call for : " + this.customer);
    }
    
}

var cart2 = {
    customer : 'Greg',
    subTotal: cart.subTotal
}

cart.subTotal();
cart2.subTotal();

var subTotalAlone = cart.subTotal;
console.log(cart.subTotal === subTotalAlone);

var cart3 = {
    taxRate  : 0.035,
    subTotal : function () {
        return 35;
    },
    total : function() {
        return this.subTotal() + this.subTotal() * this.taxRate;
    }
}

cart3.subTotal();
cart3.total();

var cart4 = {
    subTotal : function () {
        return 15;
    }
    
    total : function () {
        function getTax() {
            return this.subTotal * this.taxRate;
        }
    }
}

var cart = {
	items: [
		{ name: 'apple', category: 'produce', price: 0.97, qty: 3 },
		{ name: 'whole canned corn', category: 'canned goods', price: 0.79, qty: 1 },
		{ name: 'lettuce', category: 'produce', price: 0.79, qty: 1 },
		{ name: '2% milk (1q)', category: 'dairy', price: 2.79, qty: 1 },
	],
	discounts: {
		'produce': 0.1,
		'canned goods': 0.2,
	},
    
    applyDiscounts :  function () {
        var that = this;
        this.items.forEach(function(item) {
            var discount = that.discounts[item.category];
            if (!discount) {
                return;
            }
            item.discount = item.price * discount;            
         });
    }
};

cart.applyDiscounts();
