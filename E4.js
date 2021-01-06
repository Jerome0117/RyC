
var num4 = 0;

function Ejercicio4() {
    var e4 = document.getElementById("E4_1");
    var ej4 = e4.options[e4.selectedIndex].value;
    if (ej4 == 'Respuesta1') {
        num4 = 1;
    }
    if (ej4 == 'Respuesta2') {
        num4 = 2;
    }
    if (ej4 == 'Respuesta3') {
        num4 = 3;
    }

}

function ValidarE4() {

    var e42 = document.getElementById("E4_2");
    var ej42 = e42.options[e42.selectedIndex].value;

    var cadAux4 = "Error en la:";
    var cont4 = 0;
    if (num4 == 1 && ej42 == "Respuesta2") {
        alert("Correcto");
    } else {
        if (num4 != 1) {
            cadAux4 = cadAux4 + " primera pregunta"
            cont4++;
        }
        if (ej42 != "Respuesta2") {
            if (cont4 == 1) {
                cadAux4 = cadAux4 + " y segunda pregunta";
            } else {
                cadAux4 = cadAux4 + " Segunda pregunta";
            }

        }


        cadAux4 = cadAux4 + ".";
        alert(cadAux4);
        cadAux4 = "";

    }


}
