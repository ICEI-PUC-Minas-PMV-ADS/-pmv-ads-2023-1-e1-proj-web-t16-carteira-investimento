function calculate() {

  var principal = document.getElementById("principal").value;
  var aporte = document.getElementById("aporte").value;
  var time = document.getElementById("time").value;
  var interest = document.getElementById("interest").value;

  console.log("principal",principal);
  console.log("aporte",aporte,typeof(aporte));
  console.log("time",time);
  console.log("interest",interest);

  // var juros = interest / 12;

  var principal = parseFloat(principal);
  var aporte = aporte !== "" ? parseFloat(aporte) : 0;
  var time = parseInt(time);
  var interest = parseFloat(interest)/100;

  console.log("principal2",principal);
  console.log("aporte2",aporte,typeof(aporte));
  console.log("time2",time);
  console.log("interest2",interest);

  if (aporte == null || aporte == 0 || aporte =="") {
    console.log(aporte == null);
    console.log(aporte == "");
    console.log(aporte == 0);
    var total = principal * Math.pow(1 + interest, time);
  } else {
    var totalAporte = (aporte * (Math.pow(1 + interest, time) - 1)) / interest;
    var total = (principal * Math.pow(1 + interest, time)) + totalAporte;
  }

  console.log(total.toFixed(2).replace('.', ','));


  document.getElementById("result").innerHTML = "Valor Final: R$" + total.toFixed(2).replace('.', ',');
}
  