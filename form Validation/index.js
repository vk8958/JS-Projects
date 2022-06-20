/*const name1= document.getElementById("index");

  name1.addEventListener("change",function (){

    console.log(name1)
  })*/

var arr = [8, 6, 8, 9];

let fun = function (arr) {
  
  for (let i = arr.length-1; i >=0; i--) {
   
    arr[i]++;
    if(arr[i]===10){
      arr[i]=0;
      arr[i-1]++;
    }


  }
console.log(arr)
   
}
fun(arr);