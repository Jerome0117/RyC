"use strict";

function ValidarE6() {
  var E3opcio1 = document.getElementById("C3_1");
  var E3respuesta1 = E3opcio1.options[E3opcio1.selectedIndex].value;
  var E3opcio2 = document.getElementById("C3_2");
  var E3respuesta2 = E3opcio2.options[E3opcio2.selectedIndex].value;
  var E3opcio3 = document.getElementById("C3_3");
  var E3respuesta3 = E3opcio3.options[E3opcio3.selectedIndex].value;
  var cadAux7 = "";

  if (E3respuesta1 == "Respuesta2" && E3respuesta2 == "Respuesta2" && E3respuesta3 == "Respuesta4") {
    alert("Correcto");
  } else {
    cadAux7 = "Error en la: ";

    if (E3respuesta1 != "Respuesta2") {
      cadAux7 = cadAux7 + "primera,";
    }

    if (E3respuesta2 != "Respuesta2") {
      cadAux7 = cadAux7 + " segunda,";
    }

    if (E3respuesta3 != "Respuesta4") {
      cadAux7 = cadAux7 + " tercera,";
    }

    cadAux7 = cadAux7 + "pregunta.";
    alert(cadAux7);
    cadAux7 = "";
  }
}