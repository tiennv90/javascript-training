foo = x => 2;

function foo() {
	return 2;
}

() => 3;
x => 3;
(...x) => 3;
(x, y) => 3;
x => {try {3;} catch (e) {}}

var foo = x => 3;
foo.name; // "foo"

foo( x => 3 )