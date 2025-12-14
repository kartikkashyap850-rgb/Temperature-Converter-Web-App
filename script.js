function convertTemp() {
  let deg = parseFloat(document.getElementById("degreeInput").value);
  let type = document.getElementById("typeSelect").value;

  if (isNaN(deg)) {
    alert("Please enter a valid number");
    return;
  }

  let result = 0;

  if (type === "fahrenheit") {
    result = (deg - 32) * 5 / 9;
    document.getElementById("resultOutput").value = result.toFixed(4) + " °C";
  } else {
    result = (deg * 9 / 5) + 32;
    document.getElementById("resultOutput").value = result.toFixed(4) + " °F";
  }
}
