"use strict";

function def() {
  var lt = document.getElementById("tempNum").value;
  var lt1 = document.getElementById("options").value;
  console.log(lt1);

  if (lt1 === "Celsius") {
    var y = 1.8 * lt;
    y += 32;
    document.getElementById("result").value = y + " " + "Fahrenheit";
  } else {
    lt -= 32;

    var _y = lt / 1.8;

    document.getElementById("result").value = _y + "  Celsius";
  }
}