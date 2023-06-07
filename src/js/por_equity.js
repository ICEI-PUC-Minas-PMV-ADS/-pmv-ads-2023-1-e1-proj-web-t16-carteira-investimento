function getData() {
  var tempData = localStorage.getItem("tradeData");
  if (tempData != null) {
      tradeData = JSON.parse(tempData);
  }
}

var ativoSet = new Set();
function getAssets() {
  for (let i = 0; i < tradeData.length; i++) {
    ativoSet.add(tradeData[i].data.ativo);
  }
}

function totalValueEquity() {

  getData();

  let valorTotal = 0.0;

  for (let i = 0; i < tradeData.length; i++) {

    if (tradeData[i].data.operacao == "Compra") {
      valorTotal += parseFloat(tradeData[i].data.valorTotal);
    } 
    else if (tradeData[i].data.operacao == "Venda") {
      valorTotal -= parseFloat(tradeData[i].data.valorTotal);
    } 
    else {
      continue;
    }
  }; 
  console.log(valorTotal);
}

function totalValueByEquity() {

  getData();
  getAssets();

  let patrimonio = new Array();

  for (ativo of ativoSet) {

    let tempData = new Array();
    let quantidade = 0;
    let valorTotal = 0.0;

    for (let i = 0; i < tradeData.length; i++) {

      if (ativo == tradeData[i].data.ativo && tradeData[i].data.operacao == "Compra") {
        valorTotal += parseFloat(tradeData[i].data.valorTotal);
        quantidade += parseInt(tradeData[i].data.quantidade);
      } 
      else if (ativo == tradeData[i].data.ativo && tradeData[i].data.operacao == "Venda") {
        valorTotal -= parseFloat(tradeData[i].data.valorTotal);
        quantidade -= parseInt(tradeData[i].data.quantidade);
      } 
      else {
        continue;
      }

      tempData = {
        ativo,
        quantidade,
        valorTotal      
      }; 
    }
    patrimonio.push(tempData);
  }
  console.log(patrimonio);
}




// Run scripts on page load
// document.addEventListener("DOMContentLoaded", function() {
//   getAssets();
// });