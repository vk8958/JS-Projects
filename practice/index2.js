//FOREACH MAP FILTER 
//EVERY SOME REDUCE 


//1. ForEach 

const arr = ["vilas", "rahul", "shalu", "shivam"];

arr.forEach(function (element, index, arr) {
    console.log(" name at  " + index + " is " + element)
})


//2.map
const arr1=[5,6,4,8,2,6]
const rtn=arr1.map((e, i, arr) => {
    return e+i;
})

console.log(rtn);


let a=6;
function re(){
    

        if(a==6){
            return "vikas";
        }else{
            return "rahul";
        }
    
}

console.log(re())