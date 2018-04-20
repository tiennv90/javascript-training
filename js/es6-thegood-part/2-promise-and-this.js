p.then( function(v) { return v.id })

var obj = {
	id: 42,
	foo: function foo() {
		setTimeout(function(){
			console.log(this.id);
		}, 100);
	}
};

obj.foo(); // undifined


var obj = {
	id: 42,
	foo: function foo() {
		var context = this;
		setTimeout(function(){
			console.log(context.id);
		}, 100);
	}
};
obj.foo(); // 42

var obj = {
	id: 42,
	foo: function foo() {
		setTimeout(function(){
			console.log(this.id);
		}.bind(this), 100);
	}
};
obj.foo(); // 42