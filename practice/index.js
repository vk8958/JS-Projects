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
    method1: function (name) {
        console.log("I am object1 method and my name is " + name);
    }
}

// obj1.method1.call(obj1);  this is for call method

// obj1.method1.call(obj1,"rahul");  call method with perameter

// obj1.method1.apply(obj1,["vikas"]);  apply method its take argument as array;

const object = {
   // car: "alto",//its not take this.car bcos its bind with another object so  
    fun: function (owner) {
        return ("HI guys we are using " + this.car+" "+this.model+" and I am owner mr "+owner)
    }
}

const more = {
    car:"alto",
    model: "2018",
    color: "black",

}

const retrunfun=object.fun.bind(more,"Vikas");
console.log(retrunfun())






