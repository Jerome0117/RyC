"use strict";

var ejercicio = document.querySelector('Select');
var imagen1 = document.getElementById('E1I');
var aleatorio = Math.round(Math.random() * (4 - 1) + 1);
var num;

function CImg1() {
  var e1 = document.getElementById("E1_SE");
  var ej1 = e1.options[e1.selectedIndex].value;

  if (ej1 == 'Respuesta1') {
    num = 1;
  }

  if (ej1 == 'Respuesta2') {
    num = 2;
  }

  if (ej1 == 'Respuesta3') {
    num = 3;
  }

  if (ej1 == 'Respuesta4') {
    num = 4;
  }

  ejercicio.addEventListener('change', ImgE1(num));
}

function ImgE1(num) {
  switch (num) {
    case 1:
      imagen1.src = "img/Ejercicio1_1.png";
      break;

    case 2:
      imagen1.src = "img/Ejercicio1_2.png";
      break;

    case 3:
      imagen1.src = "img/Ejercicio1_3.png";
      break;

    case 4:
      imagen1.src = "img/Ejercicio1_4.png";
      break;
  }
}

function ValidarE1_1() {
  cadAux1 = "";
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
        alert("EXCELENTE!");
      } else {
        cadAux1 = "Error en: ";

        if (r1 != "Respuesta1") {
          cadAux1 = cadAux1 + "primera, ";
        }

        if (r2 != 'Respuesta2') {
          cadAux1 = cadAux1 + "segunda, ";
        }

        if (r3 != 'Respuesta3') {
          cadAux1 = cadAux1 + "tercera, ";
        }

        if (r4 != 'Respuesta4') {
          cadAux1 = cadAux1 + "cuarta, ";
        }

        cadAux1 = cadAux1 + "pregunta.";
        alert(cadAux1);
        cadAux1 = "";
      }

      break;

    case 2:
      if (r1 == "Respuesta2" && r2 == "Respuesta4" && r3 == "Respuesta3" && r4 == "Respuesta1") {
        alert("EXCELENTE!");
      } else {
        cadAux1 = "Error en: ";

        if (r1 != "Respuesta2") {
          cadAux1 = cadAux1 + "primera, ";
        }

        if (r2 != 'Respuesta4') {
          cadAux1 = cadAux1 + "segunda, ";
        }

        if (r3 != 'Respuesta3') {
          cadAux1 = cadAux1 + "tercera, ";
        }

        if (r4 != 'Respuesta1') {
          cadAux1 = cadAux1 + "cuarta, ";
        }

        cadAux1 = cadAux1 + "pregunta.";
        alert(cadAux1);
        cadAux1 = "";
      }

      break;

    case 3:
      if (r1 == "Respuesta2" && r2 == "Respuesta1" && r3 == "Respuesta3" && r4 == "Respuesta4") {
        alert("EXCELENTE!");
      } else {
        cadAux1 = "Error en: ";

        if (r1 != "Respuesta2") {
          cadAux1 = cadAux1 + "primera, ";
        }

        if (r2 != 'Respuesta1') {
          cadAux1 = cadAux1 + "segunda, ";
        }

        if (r3 != 'Respuesta3') {
          cadAux1 = cadAux1 + "tercera, ";
        }

        if (r4 != 'Respuesta4') {
          cadAux1 = cadAux1 + "cuarta, ";
        }

        cadAux1 = cadAux1 + "pregunta.";
        alert(cadAux1);
        cadAux1 = "";
      }

      break;

    case 4:
      if (r1 == "Respuesta2" && r2 == "Respuesta1" && r3 == "Respuesta4" && r4 == "Respuesta3") {
        alert("EXCELENTE!");
      } else {
        cadAux1 = "Error en: ";

        if (r1 != "Respuesta2") {
          cadAux1 = cadAux1 + "primera, ";
        }

        if (r2 != 'Respuesta1') {
          cadAux1 = cadAux1 + "segunda, ";
        }

        if (r3 != 'Respuesta4') {
          cadAux1 = cadAux1 + "tercera, ";
        }

        if (r4 != 'Respuesta3') {
          cadAux1 = cadAux1 + "cuarta, ";
        }

        cadAux1 = cadAux1 + "pregunta.";
        alert(cadAux1);
        cadAux1 = "";
      }

      break;

    default:
      alert("Error");
      break;
  }
}