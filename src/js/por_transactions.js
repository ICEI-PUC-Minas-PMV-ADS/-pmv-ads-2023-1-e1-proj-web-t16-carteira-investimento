const importButton = document.getElementById("import-button");
const addButton = document.getElementById("add-button");
const deleteButton = document.getElementById("delete-button");


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
    let acao = " ";
    let uniqueEmpId = new Date().getTime();
  
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
        valorTotal,
        acao,
        uniqueEmpId
    };
    
    // add current transaction to transaction history
    tradeData.push(transactionData);

    // store updated user data in local storage
    localStorage.setItem("tradeData", JSON.stringify(tradeData));

    createTableRow(transactionData);

}

let editID = "";

function createTableRow (transactionData) {
    const element = document.createElement("tr");
    let attr = document.createAttribute("data-id");
    attr.value = transactionData.uniqueEmpId;
    element.setAttributeNode(attr);
    element.classList.add("fullEmpDetail");
    element.innerHTML = `
    <td id=itemTD">${transactionData.item}</td>,
    <td id=corretoraTD">${transactionData.corretora}</td>,
    <td id=notaCorretagemTD">${transactionData.notaCorretagemT}</td>,
    <td id=dataPregaoTD">${transactionData.dataPregao}</td>,
    <td id=tipoAtivoTD">${transactionData.tipoAtivo}</td>,
    <td id=operacaoTD">${transactionData.operacao}</td>,
    <td id=quantidadeTD">${transactionData.quantidade}</td>,
    <td id=precoTD">${transactionData.preco}</td>,
    <td id=corretagemTD">${transactionData.corretagem}</td>,
    <td id=outrosCustosTD">${transactionData.outrosCustos}</td>,
    <td id=valorTotalTD">${transactionData.valorTotal}</td>,
    <td>
      <i class="fas fa-eye"></i>
      <i value="Edit" type="button" id="update-row" class="edit-row fas fa-pencil-alt"></i>
      <i value="Delete" type="button" class="remove-row fas fa-trash-alt"></i>
    </td>
`;

    transactionData.appendChild(element);
}

function getData() {
    var tempData = localStorage.getItem("tradeData");
    if (tempData != null) {
        tradeData = JSON.parse(tempData);
    }
}

function loadData(filePath, storageKey) {
    fetch(filePath)
        .then(response => response.json())
        .then(data => {
            localStorage.setItem(storageKey, JSON.stringify(data)
        );
    })
    .catch(error => console.error(error));
}

function showData() {
    
    getData();
    
    const table = document.getElementById('trade-data');
  
    // Clear existing table
    table.innerHTML = '';
  
    // Generate table rows
    tradeData.slice().reverse().forEach(data => {
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

importButton.addEventListener("click", function() {
    loadData("data/trade_history.JSON", "tradeData");
    alert("Dados carregados com sucesso no localStorage!");
    setTimeout(() => {
        document.location.reload();
      }, 1000);
});


deleteButton.addEventListener("click", function() {
    delData();
    alert("Dados excluídos com sucesso do localStorage!");
    setTimeout(() => {
        document.location.reload();
      }, 1000);
});


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
