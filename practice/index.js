//1. call,apply,bind

console.log('Hi i am vikas');


const obj = {
    name: "vikas",
    class: "b.tech",
    batch: 11,
    school: "accio job",
}

function method() {
    console.log("My name is " + this.name)
}

method.call(obj);


// Apply
const obj1 = {
    name: "Laddu",
    method1: function () {
        console.log("I am object1 method");
    }
}

obj1.method1.call(obj1); 


