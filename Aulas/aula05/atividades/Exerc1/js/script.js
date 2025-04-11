let x1 = document.getElementById("id_x1");
let y1 = document.getElementById("id_y1");
let x2 = document.getElementById("id_x2");
let y2 = document.getElementById("id_y2");

function calculaDistancia(){
    let x_1 = x1.value;
    let x_2 = x2.value;
    let y_1 = y1.value;
    let y_2 = y2.value;
    let calculoDistancia;
    if(((x_1 !== "") && (x_1 !== undefined) && (x_1 !==null)) 
        && ((y_1 !== "") && (y_1 !== undefined) && (y_1 !==null))
        && ((x_2 !== "") && (x_2 !== undefined) && (x_2 !==null))
        && ((y_2 !== "") && (y_2 !== undefined) && (y_2 !==null))){
        //Faz o calculo
        let xTotal = Math.pow((x_2-x_1), 2);
        let yTotal = Math.pow((y_2-y_1), 2);
        let xMaisY = xTotal + yTotal;
        calculaDistancia = Math.sqrt(xMaisY).toFixed(2);
        document.getElementById("resultado").innerHTML += "O cálculo da distância é " +calculaDistancia+".";
    } else{
        //Mensagem de erro
        document.getElementById("resultado").innerHTML = "Valor inesperado!";
    }
}