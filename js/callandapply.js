function sqsum(a, b) {
    return Math.pow(a, 2) + Math.pow(b, 2);
}

sqsum(2, 3);
sqsum.call(null, 2, 3);
sqsum.apply(null, [2, 3]);

var hello = {
    name : "Welcomebot",
    speak : function (to) {
        return this.name + 'say "welcome, ' + to + '."';
    }
}

var goodbye = {
    name : "Farewellbot",
    speak : function (to) {
        return this.name + 'say "Goodbye, ' + to + '."';
    }
}

hello.speak('Ethan');
goodbye.speak('Ethan');
hello.speak.call(null, 'Ethan');
hello.speak.call(hello, 'Ethan');
hello.speak.call(goodbye, 'Ethan');
hello.speak.apply(goodbye, ['Ethan']);
goodbye.speak.apply(hello, ['Ethan']);

var speak = hello.speak;
speak('Ethan');
speak.call(hello, 'Ethan');
hello.speak.call({ name : 'AnotherGreetingBot'}, 'Ethan');

function numberRotbot(n) {
    this.robot = n;
}

var robots = [hello, goodbye];

for (var i = 0; i < robots.length; i++) {
    numberRotbot.call(robots[i], i);
}

hello;
goodbye;

var robotRegistry = {
    robots : [],
    addRobot : function (r) {
        this.robots.push(r);
    }
}

robots.forEach(robotRegistry.addRobot, robotRegistry);
robotRegistry.robots;