// bind method example
var person = {
    firstName : 'John',
    lastName : 'Doe',
    getFullName : function () {
        return this.firstName + " " + this.lastName;
    }
}

var showName = function(lang1, lang2) {
    console.log(this.getFullName());
    console.log("lang 1: " + lang1);
    console.log("lang 2: " + lang2);
}

var showFullName = showName.bind(person);
showFullName('en', 'es');

// 'call' method example
showName.call(person, 'vi', 'fr');
// 'apply' method example
showName.apply(person, ['cs', 'cn']);

//function borrowing (real world example for 'apply')
var person2 = {
    firstName: "John 2",
    lastName: "Doe 2"
}

console.log(person.getFullName.apply(person2));

//function currying (real world example for 'bind')
function multiply(a, b) {
    return a * b;
}

var multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(3));