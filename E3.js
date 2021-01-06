
////////////////////////////////ejercicio 3//////////////////////////////////////////

var num3 = 0;

function Ejercicio3() {
    var e3 = document.getElementById("E3_M");
    var ej3 = e3.options[e3.selectedIndex].value;

    if (ej3 == 'Respuesta1') {
        num3 = 1;
    }
    if (ej3 == 'Respuesta2') {
        num3 = 2;
    }
    if (ej3 == 'Respuesta3') {
        num3 = 3;
    }

}

function ValidarE3_1() {
    if (num3 == 1) {
        alert("Correcto");
    }else{
        alert("Error: Opción erronea");
    }
}

function ValidarE3_2() {
    if (num3 == 2) {
        alert("Correcto");
    }else{
        alert("Error: Opción erronea");
    }
}
function ValidarE3_3() {
    if (num3 == 3) {
        alert("Correcto");
    }else{
        alert("Error: Opción erronea");
    }
}
////////////////////////////////////////////////////////////////////
