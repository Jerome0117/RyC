/*
////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var numero;

function CE3CI() {
    var e11 = document.getElementById("CE3");
    var ejj = e11.options[e11.selectedIndex].value;

    if (ejj == 'Respuesta1') {
        numero = 1;
    }
    if (ejj == 'Respuesta2') {
        numero = 2;
    }
    if (ejj == 'Respuesta3') {
        numero = 3;
    }
    if (ejj == 'Respuesta4') {
        numero = 4;
    }

    ejercicio.addEventListener('change', CE3I(numero));

}
let imagen3 = document.getElementById('CE3img');

function CE3I(num) {

    switch (num) {
        case 1:
            imagen3.src = "img/CEj3_1.png";
            break;
        case 2:
            imagen3.src = "img/CEj3_2.png";
            break;
        case 3:
            imagen3.src = "img/CEj3_3.png";
            break;
        case 4:
            imagen3.src = "img/CEj3_4.png";
            break;
    }

}

function Valr() {
    alert(num);

    var opc1 = document.getElementById("E1_1");
    var r1 = opc1.options[opc1.selectedIndex].value;

    var opc2 = document.getElementById("E1_2");
    var r2 = opc2.options[opc2.selectedIndex].value;

    var opc3 = document.getElementById("E1_3");
    var r3 = opc3.options[opc3.selectedIndex].value;

    var opc4 = document.getElementById("E1_4");
    var r4 = opc4.options[opc4.selectedIndex].value;


    switch (num) {
        case 1:
            if (r1 == 'Respuesta1' && r2 == 'Respuesta2' && r3 == 'Respuesta3' && r4 == 'Respuesta4') {
                alert("EXCELENTE! 1");
            } else {
                alert("RESPUESTAS INCORRECTAS 1");
            }
            break;

        case 2:
            if (r1 == "Respuesta2" && r2 == "Respuesta4" && r3 == "Respuesta3" && r4 == "Respuesta1") {
                alert("EXCELENTE! 2");
            } else {
                alert("RESPUESTAS INCORRECTAS 2");
            }
            break;

        case 3:
            if (r1 == "Respuesta2" && r2 == "Respuesta1" && r3 == "Respuesta3" && r4 == "Respuesta4") {
                alert("EXCELENTE! 3");
            } else {
                alert("RESPUESTAS INCORRECTAS 3");
            }
            break;

        case 4:
            if (r1 == "Respuesta2" && r2 == "Respuesta1" && r3 == "Respuesta4" && r4 == "Respuesta3") {
                alert("EXCELENTE! 4");
            } else {
                alert("RESPUESTAS INCORRECTAS 4");
            }
            break;

        default:
            alert("Error")
            break;

    }
}

*/