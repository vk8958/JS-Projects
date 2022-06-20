
  //using local storage
  

const name1= document.getElementById("index");
const email=document.getElementById("email")
  name1.addEventListener("input",function (){
     
    console.log(name1.value)
    localStorage.setItem("name",name1.value)
  })

  email.addEventListener("input" ,()=>{
    console.log(email.value)

    localStorage.setItem("email",email.value)
  })
 
   
  
 name1.value= localStorage.getItem("name")
 email.value=localStorage.getItem("email")

   

  /*
var arr = [8, 6, 8, 9];

let fun = function (arr) {

  arr[arr.length - 1]++;

  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i]++;
    if (arr[i] == 10) {
      arr[i] = 0;
      
    }


  }
  console.log(arr)

}
fun(arr);
*/