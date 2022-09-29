const person = {
    name: "vikas",
    class: "b",
    id: 11,
}

const rahul={
    name:"rahul",
    class:"c",
    id:12
}

const personMethod={
    details:function(){
        console.log(this.name+" and my id is "+this.id)
    }
}


// any object can use the mehtod of another object


personMethod.details.call(person);

personMethod.details.call(rahul);


// call()   method with arguments 


const vikas =function(city,state){
    console.log(`hi i am ${this.name} from `+city+" and my state is "+state);
}

vikas.call(rahul,'modinagar','up')

//  apply()  method   its only differ by its take arguments as array


function vikas2(city,state){
    console.log("hi i am vikas my city and state are "+state )
}
vikas2.apply(vikas,["modinagar","up"])