// Run scripts on page load
document.addEventListener("DOMContentLoaded", function() {
  loadCharts();
});


function getData() {
  var tempData = localStorage.getItem("tradeData");
  if (tempData != null) {
      tradeData = JSON.parse(tempData);
  }
  return tradeData;
}


var ativoSet = new Set();
function getAssets() {
  for (let i = 0; i < tradeData.length; i++) {
    ativoSet.add(tradeData[i].data.ativo);
  }
  return ativoSet;
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



function historicalReturn() {

  patrimonio = totalReturnByEquity();

  let totalReturn = 0.0;

  for (let i = 0; i < patrimonio.length; i++) {
    if (parseInt(patrimonio[i].quantidade) == 0) {
      totalReturn += parseFloat(patrimonio[i].valorTotal);
    }
  // console.log(totalReturn);
  }
  return totalReturn;
}

let retorno = historicalReturn();
retorno = parseFloat(retorno).toFixed(2);
document.getElementById("return").textContent = retorno;
if(retorno >= 0) {
  document.getElementById("return-card").classList.add("bg-success");
}
else {
  document.getElementById("return-card").classList.add("bg-danger");
}


// function totalReturn() {

//   getData();

//   let valorTotal = 0.0;

//   for (let i = 0; i < tradeData.length; i++) {

//     if (tradeData[i].data.operacao == "Compra") {
//       valorTotal += parseFloat(tradeData[i].data.valorTotal);
//     } 
//     else if (tradeData[i].data.operacao == "Venda") {
//       valorTotal -= parseFloat(tradeData[i].data.valorTotal);
//     } 
//     else {
//       continue;
//     }
//   }; 
//   console.log(valorTotal);
// }


function getTopN(start = -5, end) {
  let patrimonio = totalReturnByEquity();

  resHist = new Array();
  for (let i = 0; i < patrimonio.length; i++) {
    if (parseInt(patrimonio[i].quantidade) == 0) {
      resHist.push(patrimonio[i]);
    }
  }

  resHist = resHist.sort((a, b) => {
    if (a.valorTotal < b.valorTotal) {
      return -1;
    }
  });

  let topN = resHist.slice(start, end);
  // console.log("topN ", topN);

  let outArray = new Array();

  for (let i = 0; i < topN.length; i++){

    let ativo = topN[i].ativo;
    // console.log("ativo ",ativo);
    let valorTotal = topN[i].valorTotal;
    // console.log("valorTotal ",valorTotal);

    var inArray = {
      valorTotal: valorTotal,
      ativo: ativo
    }    
    // console.log(inArray.data.datasets.data);
    // console.log(inArray.labels);
    outArray.push(inArray);
  }
  // console.log(outArray);
  return(outArray);
}

// Run scripts on page load
// document.addEventListener("DOMContentLoaded", function() {
//   getAssets();
// });


const bestHist = document.getElementById('bestHistResults');
const worstHist = document.getElementById('worstHistResults');

function loadCharts() {

  let topN = getTopN();
  let bottomN = getTopN(0,5);
  
  let topValorTotal = new Array();
  let bottomValorTotal = new Array();
  let topAtivo = new Array();
  let bottomAtivo = new Array();

  for (let i = 0; i < topN.length; i++) {
    topValorTotal.push(topN[i].valorTotal);
    // console.log(topValorTotal);
    topAtivo.push(topN[i].ativo);
    // console.log(topAtivo);
  }

  for (let i = 0; i < bottomN.length; i++) {
    bottomValorTotal.push(bottomN[i].valorTotal);
    // console.log(bottomValorTotal);
    bottomAtivo.push(bottomN[i].ativo);
    // console.log(bottomAtivo);
  }

  new Chart(bestHist, {
    type: 'bar',
    data: {
      labels: topAtivo,
      datasets: [{
        label: 'Lucro R$',
        data: topValorTotal,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
  
  new Chart(worstHist, {
    type: 'bar',
    data: {
      labels: bottomAtivo,
      datasets: [{
        label: 'Prejuízo R$',
        data: bottomValorTotal,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });

}
