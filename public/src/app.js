var array = [1, 2, 3, 4, 5].sort(function(a, b) {});

function sort(a, b) {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    }
    return 0;
}

function compare(a, b) {
    return a >= b;
}

var b = true;

var a = undefined | null;

console.log(a)

var object = {
    name: 'Bob',
    age: 50
}

class Person {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getLegal() {
        return this.age >= 21;
    }
}

console.log(new Person('Bob', 50));
