console.log("code start");
const roomTemp = document.getElementById("atm-temp");
const acTemp = document.getElementById("set-ac-temp");

const btn = document.getElementById("btn");

let output = document.getElementById("output-temp")


btn.addEventListener('click', function () {

    let a = roomTemp.value;
    //console.log(a)
    let b = acTemp.value;
    let d = a - b;
    if (d < 4) {
        output.innerHTML = "Low Speed";
    } else if (d >= 4 && d <= 10) {
        output.innerHTML = "Medium Speed";
    } else {
        output.innerHTML = "High speed"
    }
})
