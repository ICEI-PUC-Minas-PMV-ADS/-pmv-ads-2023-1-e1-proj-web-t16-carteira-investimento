function calculate() {
    var principal = parseFloat(document.getElementById("principal").value);
    var aporte = parseFloat(document.getElementById("aporte").value);
    var time = parseInt(document.getElementById("time").value);
    var interest = parseFloat(document.getElementById("interest").value) / 100;
    var juros = interest / 12;

    if (time <= 60) {
      if (aporte == null || aporte == 0) {
        var total = principal * Math.pow(1 + juros, time);
      } else {
        var totalAporte = aporte * (Math.pow(1 + juros, time) - 1) / juros;
        var total = principal * Math.pow(1 + juros, time) + totalAporte;
      }
    } else {
      document.getElementById("result").innerHTML = "Você digitou um prazo maior do que cinco anos. ";
      return;
    }

    document.getElementById("result").innerHTML = "O valor total que terá rendido sem descontar os impostos é de: R$ " + total.toFixed(2).replace('.', ',');
  }
  