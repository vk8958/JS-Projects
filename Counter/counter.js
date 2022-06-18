const btn = document.getElementsByClassName('btn');

const num = document.getElementsByClassName("count");


btn[0].addEventListener("click", function1)
btn[1].addEventListener("click", function2);
btn[2].addEventListener("click", function3);


function function1() {
    num[0].innerHTML--;
}

function function2() {
    num[0].innerHTML=0;
}

function function3() {
    num[0].innerHTML++;
}


