function getData() {
  var tempData = localStorage.getItem("tradeData");
  if (tempData != null) {
      tradeData = JSON.parse(tempData);
  }
}

var ativoSet = new Set();
function getAssets() {
  getData();
  for (let i = 0; i < tradeData.length; i++) {
    ativoSet.add(tradeData[i].data.ativo);
  }
}

function getEquity() {
  getData();
  getAssets();

  for (let ativo of ativoSet) {
    // console.log(ativo);

    // let patrimonio = new Array();
    let quantidade = 0;
    let valorTotal = 0.0;

    for (let i = 0; i < tradeData.length; i++) {
      // console.log(tradeData[i].data);
      // console.log("i ", i);
      // console.log("ativoSet ", ativo);
      // console.log("ativoTradeData ", tradeData[i].data.ativo);
      console.log("operacao ", tradeData[i].data.operacao);
      // console.log("ativo = ativo", ativo === tradeData[i].data.ativo);
      console.log("operacao Compra", tradeData[i].data.operaco == 0);
      console.log("operacao Venda", tradeData[i].data.operaco == 1);

      if (ativo == tradeData[i].data.ativo & tradeData[i].data.operaco == 0) {
        valorTotal += parseDouble(tradeData[i].data.valorTotal);
        quantidade += parseInt(tradeData[i].data.quantidade);
      } 
      else if (ativo == tradeData[i].data.ativo & tradeData[i].data.operaco == 1) {
        valorTotal -= parseDouble(tradeData[i].data.valorTotal);
        quantidade -= parseInt(tradeData[i].data.quantidade);
      } 


      // console.log(ativo);
      console.log("quantidade ", quantidade);
      console.log("valorTotal ", valorTotal);

      // patrimonio[i] = {
      //   "ativo": ativo,
      //   "quantidade": quantidade,
      //   "valorTotal": valorTotal
      // }
    }
  }
  // console.log(patrimonio);
}




// Run scripts on page load
// document.addEventListener("DOMContentLoaded", function() {
//   getAssets();
// });