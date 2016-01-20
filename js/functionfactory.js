function makeGreeting(language) {
    
    return function (firstname, lastname) {
        
        if (language === 'en') {
            console.log("Hello " + firstname + " " + lastname);
        } else {
            console.log("Hola " + firstname + " " + lastname);
        }
    }
}

makeGreeting('en')('tien', 'nguyen');
var greeting = makeGreeting('es');
greeting('Captain', 'Jack');
