
//////////////ejercicio 2 //////////////////////////7


let imagen2 = document.getElementById('E2I');


var num2;


function CImg2() {
    var e1 = document.getElementById("E2_SE");
    var ej = e1.options[e1.selectedIndex].value;

    if (ej == 'Respuesta1') {
        num2 = 1;
    }
    if (ej == 'Respuesta2') {
        num2 = 2;
    }
    if (ej == 'Respuesta3') {
        num2 = 3;
    }
    if (ej == 'Respuesta4') {
        num2 = 4;
    }

    ejercicio.addEventListener('change', ImgE2(num2));

}

function ImgE2(num2) {

    switch (num2) {
        case 1:
            imagen2.src = "img/Ejercicio2_1.png";
            break;
        case 2:
            imagen2.src = "img/Ejercicio2_2.png";
            break;
        case 3:
            imagen2.src = "img/Ejercicio2_3.png";
            break;
        case 4:
            imagen2.src = "img/Ejercicio2_4.png";
            break;
    }

}

function ValidarE2() {
    var cadAux2 = "";

    var preg1 = document.getElementById("E2R1");
    var resp1 = preg1.options[preg1.selectedIndex].value;
    var preg2 = document.getElementById("E2R2");
    var resp2 = preg1.options[preg2.selectedIndex].value;
    var preg3 = document.getElementById("E2R3");
    var resp3 = preg1.options[preg3.selectedIndex].value;
    var preg4 = document.getElementById("E2R4");
    var resp4 = preg1.options[preg4.selectedIndex].value;
    var preg5 = document.getElementById("E2R5");
    var resp5 = preg1.options[preg5.selectedIndex].value;

    var checkbox1 = document.getElementById("E2R5_1");
    var checkbox2 = document.getElementById("E2R5_2");
    var checkbox3 = document.getElementById("E2R5_3");

    switch (num2) {
        case 1:
            if (resp1 == "Respuesta1" && resp2 == "Respuesta1" && resp3 == "Respuesta2" && resp4 == "Respuesta2" && resp5 == "Respuesta1" && checkbox1.checked == false && checkbox2.checked == true && checkbox3.checked == false) {
                alert("Correto!");
            } else {
                cadAux2 = "Error en: ";
                if (resp1 != "Respuesta1") {
                    cadAux2 = cadAux2 + "primera, ";
                }
                if (resp2 != "Respuesta1") {
                    cadAux2 = cadAux2 + "segunda, ";
                }
                if (resp3 != "Respuesta2") {
                    cadAux2 = cadAux2 + "tercera, ";
                }
                if (resp4 != "Respuesta2") {
                    cadAux2 = cadAux2 + "cuarta, ";
                }
                if (resp5 != "Respuesta1") {
                    cadAux2 = cadAux2 + "quinta, ";
                }
                cadAux2 = cadAux2 + "pregunta "
                if (checkbox1.checked !== false && checkbox2.checked != true && checkbox3.checked != false) {
                    cadAux2 = cadAux2 + " y el la opción multiple.";
                }
                alert(cadAux2);
                cadAux2 = "";
            }
            break;
        case 2:
            if (resp1 == "Respuesta1" && resp2 == "Respuesta3" && resp3 == "Respuesta1" && resp4 == "Respuesta1" && resp5 == "Respuesta3" && checkbox1.checked == true && checkbox2.checked == false && checkbox3.checked == false) {
                alert("Correto!");
            } else {
                cadAux2 = "Error en: ";
                if (resp1 != "Respuesta1") {
                    cadAux2 = cadAux2 + "primera, ";
                }
                if (resp2 != "Respuesta3") {
                    cadAux2 = cadAux2 + "segunda, ";
                }
                if (resp3 != "Respuesta1") {
                    cadAux2 = cadAux2 + "tercera, ";
                }
                if (resp4 != "Respuesta1") {
                    cadAux2 = cadAux2 + "cuarta, ";
                }
                if (resp5 != "Respuesta3") {
                    cadAux2 = cadAux2 + "quinta, ";
                }
                cadAux2 = cadAux2 + "pregunta "
                if (checkbox1.checked !== true && checkbox2.checked != false && checkbox3.checked != false) {
                    cadAux2 = cadAux2 + " y el la opción multiple.";
                }
                alert(cadAux2);
                cadAux2 = "";
            }
            break;
        case 3:
            if (resp1 == "Respuesta1" && resp2 == "Respuesta1" && resp3 == "Respuesta2" && resp4 == "Respuesta2" && resp5 == "Respuesta1" && checkbox1.checked == false && checkbox2.checked == true && checkbox3.checked == false) {
                alert("Correto!");
            } else {
                cadAux2 = "Error en: ";
                if (resp1 != "Respuesta1") {
                    cadAux2 = cadAux2 + "primera, ";
                }
                if (resp2 != "Respuesta1") {
                    cadAux2 = cadAux2 + "segunda, ";
                }
                if (resp3 != "Respuesta2") {
                    cadAux2 = cadAux2 + "tercera, ";
                }
                if (resp4 != "Respuesta2") {
                    cadAux2 = cadAux2 + "cuarta, ";
                }
                if (resp5 != "Respuesta1") {
                    cadAux2 = cadAux2 + "quinta, ";
                }
                cadAux2 = cadAux2 + "pregunta "
                if (checkbox1.checked !== false && checkbox2.checked != true && checkbox3.checked != false) {
                    cadAux2 = cadAux2 + " y el la opción multiple.";
                }
                alert(cadAux2);
                cadAux2 = "";
            }
            break;
        case 4:
            if (resp1 == "Respuesta1" && resp2 == "Respuesta1" && resp3 == "Respuesta2" && resp4 == "Respuesta2" && resp5 == "Respuesta1" && checkbox1.checked == false && checkbox2.checked == true && checkbox3.checked == false) {
                alert("Correto!");
            } else {
                cadAux2 = "Error en: ";
                if (resp1 != "Respuesta1") {
                    cadAux2 = cadAux2 + "primera, ";
                }
                if (resp2 != "Respuesta1") {
                    cadAux2 = cadAux2 + "segunda, ";
                }
                if (resp3 != "Respuesta2") {
                    cadAux2 = cadAux2 + "tercera, ";
                }
                if (resp4 != "Respuesta2") {
                    cadAux2 = cadAux2 + "cuarta, ";
                }
                if (resp5 != "Respuesta1") {
                    cadAux2 = cadAux2 + "quinta, ";
                }
                cadAux2 = cadAux2 + "pregunta "
                if (checkbox1.checked !== false && checkbox2.checked != true && checkbox3.checked != false) {
                    cadAux2 = cadAux2 + " y el la opción multiple.";
                }
                alert(cadAux2);
                cadAux2 = "";
            }
            break;

        default:
            alert("Error: no se contesto nada");
            break;
    }

}





