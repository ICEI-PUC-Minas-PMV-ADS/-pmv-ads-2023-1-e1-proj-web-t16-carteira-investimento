// // Verifica se o usuário já esta logado e se negativo, redireciona para tela de login        
// function checkLoggedIn() {
//     const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
  
//     if (!currentUser) {
//       window.location.href = "login.html";
//     }
// };

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

function totalAquisitonCost() {
  patrimonio = totalReturnByEquity();
  let aquisitionCost = 0.0;

  for (let i = 0; i < patrimonio.length; i++) {
    if (parseInt(patrimonio[i].quantidade) != 0) {
      aquisitionCost += parseFloat(patrimonio[i].valorTotal);
    }
  // console.log(aquisitionCost);
  }
  return aquisitionCost;
}

let aquisitonCost = totalAquisitonCost();
aquisitonCost = parseFloat(aquisitonCost).toFixed(2);
document.getElementById("total-cost").textContent = "R$ " + aquisitonCost;


function totalMarketValue() {
  patrimonio = totalAquisitonCost();

  let result = Math.random();
  
  if (result >= 0.5) {
    patrimonio *= (1 + (Math.random() * 0.2));
  } else {
    patrimonio *= (1 -  (Math.random() * 0.2));
  }
  return patrimonio;
}

let marketValue = totalMarketValue();
marketValue = parseFloat(marketValue).toFixed(2);
document.getElementById("market-value").textContent = "R$ " + marketValue;

let expectetdReturn = marketValue - aquisitonCost

expectetdReturn = parseFloat(expectetdReturn).toFixed(2);
document.getElementById("return").textContent = "R$ " + expectetdReturn;
if(expectetdReturn >= 0) {
  document.getElementById("return-card").classList.add("bg-success");
}
else {
  document.getElementById("return-card").classList.add("bg-danger");
}

let relativeVariation = (expectetdReturn / marketValue) * 100;
relativeVariation = relativeVariation.toFixed(2);
document.getElementById("relative-variation").textContent = relativeVariation + "%";

function getTopN(start = -5, end) {
  let patrimonio = totalReturnByEquity();
  patrimonio = patrimonio.sort((a, b) => {
    if (a.valorTotal < b.valorTotal) {
      return -1;
    }
  });

  let topN = patrimonio.slice(start, end);


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


const best = document.getElementById('bestResults');
const worst = document.getElementById('worstResults');

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

  new Chart(best, {
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
  
  new Chart(worst, {
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


// Run scripts on page load
document.addEventListener("DOMContentLoaded", function() {
  // checkLoggedIn();
  loadCharts();
});


//// página rentabilidade

// function historicalReturn() {

//   patrimonio = totalReturnByEquity();

//   let totalReturn = 0.0;

//   for (let i = 0; i < patrimonio.length; i++) {
//     if (parseInt(patrimonio[i].quantidade) == 0) {
//       totalReturn += parseFloat(patrimonio[i].valorTotal);
//     }
//   // console.log(totalReturn);
//   }
//   return totalReturn;
// }

// let retorno = historicalReturn();
// retorno = parseFloat(retorno).toFixed(2);
// document.getElementById("").textContent = retorno;
// if(retorno >= 0) {
//   document.getElementById("return-card").classList.add("bg-success");
// }
// else {
//   document.getElementById("return-card").classList.add("bg-danger");
// }