// get transaction data to local storage
function importDataFromFile(filePath, storageKey) {
  fetch(filePath)
    .then(response => response.json())
    .then(data => {
      localStorage.setItem(storageKey, JSON.stringify(data));
      console.log("Data imported successfully!");
    })
    .catch(error => console.error(error));
}

const importDataButton = document.getElementById("import-button");
importDataButton.addEventListener("click", function(event) {
  importDataFromFile("data/trade_history.JSON", "tradeData");
  alert("Importação dos dados concluída com sucesso!");
});


// build dynamic table using DataTables

$(document).ready(function () {
  tradeData = JSON.parse(localStorage.getItem("tradeData"));
  $('#trade-data').DataTable({
    data: tradeData,
    columns: [
        { data: 'item' },
        { data: 'corretora' },
        { data: 'notaCorretagem' },
        { data: 'dataPregao' },
        { data: 'tipoAtivo' },
        { data: 'operacao' },
        { data: 'ativo' },
        { data: 'quantidade' },
        { data: 'preco' },
        { data: 'corretagem' },
        { data: 'outrosCustos' },
        { data: 'valorTotal' }
    ],
  });
});


// Function to register transaction
function registerTransaction() {
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
  
  if (!corretora || !notaCorretagem || !dataPregao || !ativo || !quantidade || !operacao || 
    !tipoAtivo || !preco || !corretagem || !outrosCustos) {
    alert("Todos os campos devem ser preenchidos!");
  }

  preco = preco.replace(',', '.');
  corretagem = corretagem.replace(',', '.');
  outrosCustos = outrosCustos.replace(',', '.');
  let valorTotal = (parseFloat(quantidade) * parseFloat(preco)) + parseFloat(corretagem) + parseFloat(outrosCustos);

  // get trade data from local storage
  let tradeData = JSON.parse(localStorage.getItem("tradeData")) || [];

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

  alert("Ativo cadastrado com sucesso!");

};  

// call registerTransaction function
const transactionRegisterButton = document.getElementById("register-button");
transactionRegisterButton.addEventListener("click", function(event) {
  registerTransaction();
});




