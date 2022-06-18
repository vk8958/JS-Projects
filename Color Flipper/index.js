const background=document.getElementsByClassName("main-container");

const btn=document.getElementsByClassName("btn");

const colortext=document.getElementsByClassName("color-name");

console.log(background[0])
console.log(btn[0])
console.log(colortext[0].innerHTML)


const arr=["#C0C0C0","#800000","#00FFFF","#808000","#FFFFF00","#00FF00","#FFFFFF","#000000","#FF0000","#0000FF"];



btn[0].addEventListener("click",function(){
    console.log(arr[Math.floor(Math.random()*10)])
    const color=arr[Math.floor(Math.random()*10)];
    background[0].style.background=color;
})

setInterval(function(){
    
        console.log(arr[Math.floor(Math.random()*10)])
        const color=arr[Math.floor(Math.random()*10)];
        background[0].style.background=color;
    
},1);