// tradeData = JSON.parse(localStorage.getItem("tradeData"));

// function to add trade data to local storage  
function addData() {

    // read values from form to variables
    let corretora = document.getElementById("corretora").value;
    let notaCorretagem = document.getElementById("notaCorretagem").value;
    let dataPregao = document.getElementById("dataPregao").value;
    let ativo = document.getElementById("ativo").value;
    let quantidade = document.getElementById("quantidade").value;
    let operacao = document.getElementById("operacao").value;
    let tipoAtivo = document.getElementById("tipoAtivo").value;
    let preco = document.getElementById("preco").value;
    let corretagem = document.getElementById("corretagem").value;
    let outrosCustos = document.getElementById("outrosCustos").value;
  
    // check if all fields are filled
    if (!corretora || !notaCorretagem || !dataPregao || !ativo || !quantidade || !operacao || 
        !tipoAtivo || !preco || !corretagem || !outrosCustos) {
        alert("Todos os campos devem ser preenchidos!");
    }

    // replace decimal digit character in order to calculate total value
    preco = preco.replace(',', '.');
    corretagem = corretagem.replace(',', '.');
    outrosCustos = outrosCustos.replace(',', '.');
    valorTotal = (parseFloat(quantidade) * parseFloat(preco)) + parseFloat(corretagem) + parseFloat(outrosCustos);

    // get trade data from localstorage, or return empyt vector if not existing
    // tradeData = JSON.parse(localStorage.getItem("tradeData")) || [];
    getData();

    let item = tradeData.length + 1;

    // create an object to hold the transaction data
    const transactionData = {
        item,
        corretora,
        notaCorretagem,
        dataPregao,
        tipoAtivo,
        operacao,
        ativo,
        quantidade,
        preco,
        corretagem,
        outrosCustos,
        valorTotal
    };
    
    // add current transaction to transaction history
    tradeData.push(transactionData);

    // store updated user data in local storage
    localStorage.setItem("tradeData", JSON.stringify(tradeData));
}
var tradeData = new Array();

function getData() {
    var tempData = localStorage.getItem("tradeData");
    if (tempData != null) {
        tradeData = JSON.parse(tempData);
    }

}

function loadData (filePath, storageKey) {
    fetch(filePath)
    .then(response => response.json())
    .then(data => {
        localStorage.setItem(storageKey, JSON.stringify(data));
    })
    .catch(error => console.error(error));
}

function showData() {
    
    getData();

    const table = document.getElementById('trade-data');
  
    // Clear existing table
    table.innerHTML = '';

    // Generate table heder
    const tableHeader = document.createElement('tr');
    for (const key in tradeData[0]) {
      const th = document.createElement('th');
      th.textContent = key;
      tableHeader.appendChild(th);
    }
    table.appendChild(tableHeader);
  
    // Generate table rows
    tradeData.forEach(data => {
      const row = document.createElement('tr');
      for (const key in data) {
        const cell = document.createElement('td');
        cell.textContent = data[key];
        row.appendChild(cell);
      }
      table.appendChild(row);
    });
}

function delData() {
    localStorage.removeItem("tradeData");
}

const importButton = document.getElementById("import-button");
importButton.addEventListener("click", function() {
    loadData("data/trade_history.JSON", "tradeData");
    alert("Dados carregados com sucesso no localStorage!");
    setTimeout(() => {
        document.location.reload();
      }, 1000);
});

const deleteButton = document.getElementById("delete-button");
deleteButton.addEventListener("click", function() {
    delData();
    alert("Dados excluídos com sucesso do localStorage!");
    setTimeout(() => {
        document.location.reload();
      }, 1000);
});

const addButton = document.getElementById("add-button");
addButton.addEventListener("click", function() {
    addData();
    alert("Transação cadastrada com sucesso!");
    setTimeout(() => {
        document.location.reload();
      }, 1000);
});

// Run scripts on page load
document.addEventListener("DOMContentLoaded", function() {
    showData();
  });