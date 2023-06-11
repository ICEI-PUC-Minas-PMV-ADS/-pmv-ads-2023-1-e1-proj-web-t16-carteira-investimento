function calculate() {
  var principal = parseFloat(document.getElementById("principal").value);
  var aporte = parseFloat(document.getElementById("aporte").value);
  var time = parseInt(document.getElementById("time").value);
  var interest = parseFloat(document.getElementById("interest").value)/100;
  // var juros = interest / 12;


  if (aporte == null || aporte == 0 || aporte == "") {
    var total = principal * Math.pow(1 + interest, time);
  } else {
    var totalAporte = aporte * (Math.pow(1 + interest, time) - 1) / interest;
    var total = principal * Math.pow(1 + interest, time) + totalAporte;
  }


  document.getElementById("result").innerHTML = "Valor Final: R$" + total.toFixed(2).replace('.', ',');
}
  