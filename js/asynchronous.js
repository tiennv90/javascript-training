function waitThreeSecond() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms) {
    }
    console.log("Finished function");
}

function clickHandler() {
    console.log("Clicked Event!");
}

document.addEventListener('click', clickHandler);
waitThreeSecond();
console.log("Finished execution!");