var cart = {
	items: [
		{ name: 'apple', category: 'produce', price: 0.97, qty: 3 },
		{ name: 'whole canned corn', category: 'canned goods', price: 0.79, qty: 1 },
		{ name: 'lettuce', category: 'produce', price: 0.79, qty: 1 },
		{ name: '2% milk (1q)', category: 'dairy', price: 2.79, qty: 1 },
	],
    
    addFreebie : function () {
        console.log("freebie added!");
        this.items.push({name : 'freebie candy bar', category: 'candy', price: 0, qty: 1});
        
    }
};

setTimeout(function() {cart.addFreebie()}, 2000);
