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

function totalReturn() {

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

function totalReturnByEquity() {

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
  return(patrimonio);
}


function getTop5() {
  let patrimonio = totalReturnByEquity();
  patrimonio = patrimonio.sort((a, b) => {
    if (a.valorTotal < b.valorTotal) {
      return -1;
    }
  });
  console.log(patrimonio);
}



// Run scripts on page load
// document.addEventListener("DOMContentLoaded", function() {
//   getAssets();
// });


const ctx = document.getElementById('myAreaChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});