let paragrafo1 = document.getElementById("p1");
let paragrafo2 = document.getElementById("p2");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

function funcaoSetTimeOut (){
    let p1 = paragrafo1;
    p1.innerHTML += "Começou a executar..." + "<br>";

    setTimeout(() => {
        p1.innerHTML += "Terminou de executar!" + "<br>";
        }, 10000);
        addEventoBtn();
}

async function addEventoBtn(){

    btn1.addEventListener("click", function () {
        console.log("AddEventListener de click!");
    });
}

function funcaoSetTimeInterval (){
    let p2 = paragrafo2;
    let incr = 10;

    setInterval(() => {
        p2.innerHTML = incr;
        incr += 10;
    }, 10000);
}

