"use strict";

var numero6;
var cadAux6;

function Ejercicio6() {
  var ejercicio6 = document.getElementById("CE2");
  var ejer1 = ejercicio6.options[ejercicio6.selectedIndex].value;

  if (ejer1 == 'Respuesta1') {
    numero6 = 1;
  }

  if (ejer1 == 'Respuesta2') {
    numero6 = 2;
  }

  if (ejer1 == 'Respuesta3') {
    numero6 = 3;
  }

  if (ejer1 == 'Respuesta4') {
    numero6 = 4;
  }

  ejercicio.addEventListener('change', CE2I(numero6));
}

var imagen6 = document.getElementById('CE2img');

function CE2I() {
  switch (numero6) {
    case 1:
      imagen6.src = "img/CEj2_1.png";
      break;

    case 2:
      imagen6.src = "img/CEj2_2.png";
      break;

    case 3:
      imagen6.src = "img/CEj2_3.png";
      break;

    case 4:
      imagen6.src = "img/CEj2_4.png";
      break;
  }
}

function VerificarE6() {
  var opc1 = document.getElementById("CE2_1");
  var res1 = opc1.options[opc1.selectedIndex].value;
  var opc2 = document.getElementById("CE2_2");
  var res2 = opc2.options[opc2.selectedIndex].value;
  var opc3 = document.getElementById("CE2_3");
  var res3 = opc3.options[opc3.selectedIndex].value;
  var opc4 = document.getElementById("CE2_4");
  var res4 = opc4.options[opc4.selectedIndex].value;

  switch (numero6) {
    case 1:
      if (res1 == "Respuesta1" && res2 == "Respuesta1" && res3 == "Respuesta2" && res4 == "Respuesta2") {
        alert("EXCELENTE!");
      } else {
        alert("RESPUESTAS INCORRECTAS");
        cadAux5 = "Error en la: ";

        if (res1 == "Respuesta1") {} else {
          cadAux5 = cadAux5 + "primera, ";
        }

        if (res2 == "Respuesta1") {} else {
          cadAux5 = cadAux5 + "segunda, ";
        }

        if (res3 == "Respuesta2") {} else {
          cadAux5 = cadAux5 + "tercera, ";
        }

        if (res4 == "Respuesta2") {} else {
          cadAux5 = cadAux5 + "cuarta, ";
        }

        cadAux5 = cadAux5 + " pregunta";
        alert(cadAux5);
        cadAux5 = "";
      }

      break;

    case 2:
      if (res1 == "Respuesta1" && res2 == "Respuesta1" && res3 == "Respuesta2" && res4 == "Respuesta3") {
        alert("EXCELENTE! ");
      } else {
        alert("RESPUESTAS INCORRECTAS ");
        cadAux5 = "Error en la: ";

        if (res1 == "Respuesta1") {} else {
          cadAux5 = cadAux5 + "primera, ";
        }

        if (res2 == "Respuesta1") {} else {
          cadAux5 = cadAux5 + "segunda, ";
        }

        if (res3 == "Respuesta2") {} else {
          cadAux5 = cadAux5 + "tercera, ";
        }

        if (res4 == "Respuesta3") {} else {
          cadAux5 = cadAux5 + "cuarta, ";
        }

        cadAux5 = cadAux5 + " pregunta";
        alert(cadAux5);
        cadAux5 = "";
      }

      break;

    case 3:
      if (res1 == "Respuesta1" && res2 == "Respuesta1" && res3 == "Respuesta2" && res4 == "Respuesta4") {
        alert("EXCELENTE! ");
      } else {
        alert("RESPUESTAS INCORRECTAS ");
        cadAux5 = "Error en la: ";

        if (res1 == "Respuesta1") {} else {
          cadAux5 = cadAux5 + "primera, ";
        }

        if (res2 == "Respuesta1") {} else {
          cadAux5 = cadAux5 + "segunda, ";
        }

        if (res3 == "Respuesta2") {} else {
          cadAux5 = cadAux5 + "tercera, ";
        }

        if (res4 == "Respuesta4") {} else {
          cadAux5 = cadAux5 + "cuarta, ";
        }

        cadAux5 = cadAux5 + " pregunta";
        alert(cadAux5);
        cadAux5 = "";
      }

      break;

    case 4:
      if (res1 == "Respuesta1" && res2 == "Respuesta1" && res3 == "Respuesta2" && res4 == "Respuesta2") {
        alert("EXCELENTE! ");
      } else {
        alert("RESPUESTAS INCORRECTAS ");
        cadAux5 = "Error en la: ";

        if (res1 == "Respuesta1") {} else {
          cadAux5 = cadAux5 + "primera, ";
        }

        if (res2 == "Respuesta1") {} else {
          cadAux5 = cadAux5 + "segunda, ";
        }

        if (res3 == "Respuesta2") {} else {
          cadAux5 = cadAux5 + "tercera, ";
        }

        if (res4 == "Respuesta2") {} else {
          cadAux5 = cadAux5 + "cuarta, ";
        }

        cadAux5 = cadAux5 + " pregunta";
        alert(cadAux5);
        cadAux5 = "";
      }

      break;

    default:
      alert("Error");
      break;
  }
}