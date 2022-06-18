const background=document.getElementsByClassName("main-container");

const btn=document.getElementsByClassName("btn");

const colortext=document.getElementsByClassName("color-name");

console.log(background[0])
console.log(btn[0])
console.log(colortext[0].innerHTML)


const arr=["#FF0000","#00FF00","FFFFFF","0000FF","#FF0000","#00FF00","FFFFFF","0000FF","#FF0000","#00FF00","FFFFFF","0000FF"];

//console.log(arr[Math.floor(Math.random()*10)])

btn[0].addEventListener("click",function(){
    const color=arr[Math.floor(Math.random()*10)];
    background[0].style.background=color;
})