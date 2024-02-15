function convertTemperature() {
  let x = document.getElementById("option_list");
  let temp_value = x.value;

  if (temp_value == 1) {
    let EnterCelsius = (document.querySelector("#temperature").placeholder =
      "Enter Celsius value");
    let celsius = document.querySelector("#temperature").value;
    document.querySelector(".temp_value_cls").innerHTML = celsius + " " + "C";
    let fahrenheit = (celsius * 9) / 5 + 32;
    document.querySelector(".temp_value_fra").innerHTML =
      fahrenheit.toFixed(1) + " " + "F";
  }

  
  if (temp_value == 2) {


    let EnterCelsius = (document.querySelector("#temperature").placeholder =
      "Enter Fahrenheit value");
    let ferenhite = document.querySelector("#temperature").value;
    document.querySelector(".temp_value_fra").innerHTML = ferenhite + " " + "F";
    let celsius = ((ferenhite - 32) * 5) / 9;
    document.querySelector(".temp_value_cls").innerHTML =
      celsius.toFixed(1) + " " + "C";
  }
}


