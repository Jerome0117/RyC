
var num5
var pase5 = true;

function ValidarE5() {
    
    var e1 = document.getElementById("CE1_R1");
    var e2 = document.getElementById("CE1_R2");
    var e3 = document.getElementById("CE1_R3");
    var e4 = document.getElementById("CE1_R4");
    var e5 = document.getElementById("CE1_R5");
    var e6 = document.getElementById("CE1_R6");
    var e7 = document.getElementById("CE1_R7");

    var ej1 = e1.options[e1.selectedIndex].value;
    var ej2 = e2.options[e2.selectedIndex].value;
    var ej3 = e3.options[e3.selectedIndex].value;
    var ej4 = e4.options[e4.selectedIndex].value;
    var ej5 = e5.options[e5.selectedIndex].value;
    var ej6 = e6.options[e6.selectedIndex].value;
    var ej7 = e7.options[e7.selectedIndex].value;

    if (ej1 == "Respuesta5" && ej2 == "Respuesta1" && ej3 == "Respuesta3" && ej4 == "Respuesta3" && ej5 == "Respuesta6" && ej6 == "Respuesta2" && ej7 == "Respuesta4") {
        alert("Correcto");
    } else {
        cadAux5 = "Error en la: ";
        if (ej1 == "Respuesta5") {
        } else {
            cadAux5 = cadAux5 + "primera, ";
        }

        if (ej2 == "Respuesta1") {
        } else {
            cadAux5 = cadAux5 + "segunda, ";
        }

        if (ej3 == "Respuesta3") {
        } else {
            cadAux5 = cadAux5 + "tercera, ";
        }
        if (ej4 == "Respuesta3") {
        } else {
            cadAux5 = cadAux5 + "cuarta, ";
        }

        if (ej5 == "Respuesta6") {
        } else {
            cadAux5 = cadAux5 + "quinta, ";
        }

        if (ej6 == "Respuesta2") {
        } else {
            cadAux5 = cadAux5 + "sexta, ";
        }

        if (ej7 == "Respuesta4") {
        } else {
            cadAux5 = cadAux5 + "septima";
        }
        cadAux5 = cadAux5 + " pregunta";
        alert(cadAux5);
        cadAux5 = "";
    }

}