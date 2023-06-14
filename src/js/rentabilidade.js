function calculate() {

  var principal = document.getElementById("principal").value;
  var aporte = document.getElementById("aporte").value;
  var time = document.getElementById("time").value;
  var interest = document.getElementById("interest").value;


  var principal = parseFloat(principal);
  var aporte = aporte !== "" ? parseFloat(aporte) : 0;
  var time = parseInt(time);
  var interest = parseFloat(interest)/100;


  if (aporte == null || aporte == 0 || aporte =="") {

    var total = principal * Math.pow(1 + interest, time);
  } else {
    var totalAporte = (aporte * (Math.pow(1 + interest, time) - 1)) / interest;
    var total = (principal * Math.pow(1 + interest, time)) + totalAporte;
  }
  document.getElementById("result").innerHTML = "Valor Final: R$" + total.toFixed(2).replace('.', ',');
}
  