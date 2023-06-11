let submitButton = document.getElementById("register-button");
let editButton = document.getElementById("edit-button");
const importButton = document.getElementById("import-button");

let tableContainerContent = document.querySelector(".table-container-content");

let tradeTable = document.getElementById("table-content");

let addModal = document.getElementById("modalRegister")
let editModal = document.getElementById("modalEdit")

tableContainerContent.addEventListener("click", deleteRowRecord);

// tableContainerContent.addEventListener("click", editRow);

let corretora = document.getElementById("corretora");
let notaCorretagem = document.getElementById("notaCorretagem");
let dataPregao = document.getElementById("dataPregao");
let ativo = document.getElementById("ativo");
let quantidade = document.getElementById("quantidade");
let operacao = document.getElementById("operacao");
let tipoAtivo = document.getElementById("tipoAtivo");
let preco = document.getElementById("preco");
let corretagem = document.getElementById("corretagem");
let outrosCustos = document.getElementById("outrosCustos");
let valorTotal = document.getElementById("valorTotal");
let uniqueId = document.getElementById("uniqueId");

let tr = null;
let tradeData = [];

let editID = "";

function getData() {
    var tempData = localStorage.getItem("tradeData");
    if (tempData != null) {
        tradeData = JSON.parse(tempData);
    }
}

//// submit data

submitButton.addEventListener("click", function () {
    
    getData();

    console.log(tradeData);

    if (corretora && notaCorretagem && dataPregao && ativo && quantidade && operacao && tipoAtivo && preco && corretagem && outrosCustos != "") {

        let tempData = {
            id: new Date().getTime(),
            data: {
                corretora: corretora.value,
                notaCorretagem: notaCorretagem.value,
                dataPregao: dataPregao.value,
                ativo: ativo.value,
                quantidade: quantidade.value,
                operacao: operacao.value,
                tipoAtivo: tipoAtivo.value,
                preco: preco.value,
                corretagem: corretagem.value,
                outrosCustos: outrosCustos.value,
                uniqueId: new Date().getTime(),
            },
        };

        // replace decimal digit character in order to calculate total value
        preco = tempData.data.preco.replace(',', '.');
        tempData.data.preco = parseFloat(preco).toFixed(2);
        corretagem = tempData.data.corretagem.replace(',', '.');
        tempData.data.corretagem = parseFloat(corretagem).toFixed(2);
        outrosCustos = tempData.data.outrosCustos.replace(',', '.');
        tempData.data.outrosCustos = parseFloat(outrosCustos).toFixed(2);
        valorTotal = (parseFloat(tempData.data.quantidade) * parseFloat(preco)) + parseFloat(corretagem) + parseFloat(outrosCustos);
        tempData.data.valorTotal = valorTotal.toFixed(2);

        tradeData.push(tempData);

        localStorage.setItem("tradeData", JSON.stringify(tradeData));
    }
});


//// create table row

function createTableRow(tempData) {
    const element = document.createElement("tr");
    let attr = document.createAttribute("data-id");
    attr.value = tempData.id;
    element.setAttributeNode(attr);
    element.classList.add("fulltempData");
    element.innerHTML = `
        <td id="tdCorretora">${tempData.data.corretora}</td>
        <td id="tdNotaCorretagem">${tempData.data.notaCorretagem}</td>
        <td id="tdDataPregao">${tempData.data.dataPregao}</td>
        <td id="tdTipoAtivo">${tempData.data.tipoAtivo}</td>
        <td id="tdOperacao">${tempData.data.operacao}</td>
        <td id="tdAtivo">${tempData.data.ativo}</td>
        <td id="tdQuantidade">${tempData.data.quantidade}</td>
        <td id="tdPreco">${tempData.data.preco}</td>
        <td id="tdCorretagem">${tempData.data.corretagem}</td>
        <td id="tdOutrosCustos">${tempData.data.outrosCustos}</td>
        <td id="tdValorTotal">${tempData.data.valorTotal}</td>
        <td>
            <i value="Edit" type="button" id="update-row" class="edit-row fas fa-pencil-alt"></i>
            <i class="fa-thin fa-square" style="color: #00FFFFFF;"></i>
            <i value="Delete" type="button" class="remove-row fas fa-trash-alt"></i>
        </td>
  `;
    tradeTable.appendChild(element);
}


//// remove table row and data record

document.addEventListener("click", function(e) {
    if (e.target.classList.contains("remove-row")) {

        var confirmed = confirm("Confirma a exclusão deste registro?");
        if (!confirmed) {
          return; // Do nothing if user cancels the delete operation
        }

        var row = e.target.parentNode.parentNode;
        var uniqueId = row.closest("tr").getAttribute("data-id");
        deleteRowRecord(uniqueId);
    }
});

function deleteRowRecord(uniqueId) {

    getData();
    var table = document.getElementById("table-content");
    var rows = table.getElementsByTagName("tr");

    for (var i = 0; i < rows.length; i++) {
        var cell = rows[i].closest("tr").getAttribute("data-id");
        // console.log(uniqueId);
        if (cell === uniqueId) {
            // remove the data from localStorage
            tradeData.splice(i,1);   
            localStorage.setItem("tradeData", JSON.stringify(tradeData));
            // remove the row from the table
            table.deleteRow(i);
            // reload page to update table 
            setTimeout(() => {
                document.location.reload();
            }, 1000);
            break; // exit the loop after remove row and record
        }
    }
}


//// edit record

// open modal, load data into inputs
document.addEventListener("click", function(e) {
    if (e.target.classList.contains("edit-row")) {
        tr = e.target.parentNode.parentNode;
        $("#modalEdit").modal("show");
        var row = e.target.parentNode.parentNode;
        var uniqueId = row.closest("tr").getAttribute("data-id");
        editRow(tr,uniqueId);
    }
});

// load data into inputs
function editRow(tr,uniqueId) {

    let edCorretora = document.getElementById("edCorretora");
    let edNotaCorretagem = document.getElementById("edNotaCorretagem");
    let edDataPregao = document.getElementById("edDataPregao");
    let edTipoAtivo = document.getElementById("edTipoAtivo");
    let edOperacao = document.getElementById("edOperacao");
    let edAtivo = document.getElementById("edAtivo");
    let edQuantidade = document.getElementById("edQuantidade");
    let edPreco = document.getElementById("edPreco");
    let edCorretagem = document.getElementById("edCorretagem");
    let edOutrosCustos = document.getElementById("edOutrosCustos");
    let edValorTotal = document.getElementById("edValorTotal");

    edCorretora.value = tr.cells[0].textContent;
    edNotaCorretagem.value = tr.cells[1].textContent;
    edDataPregao.value = tr.cells[2].textContent;
    edTipoAtivo.value = tr.cells[3].textContent;
    edOperacao.value = tr.cells[4].textContent;
    edAtivo.value = tr.cells[5].textContent;
    edQuantidade.value = tr.cells[6].textContent;
    edPreco.value = tr.cells[7].textContent;
    edCorretagem.value = tr.cells[8].textContent;
    edOutrosCustos.value = tr.cells[9].textContent;
    edValorTotal.value = tr.cells[10].textContent;
    edUniqueID = parseInt(uniqueId);
    console.log(edUniqueID);
    console.log(typeof(edUniqueID));
}


editButton.addEventListener("click", function () {
     
    getData();

    if (edCorretora && edNotaCorretagem && edDataPregao && edAtivo && edQuantidade && edOperacao && edTipoAtivo && edPreco && edCorretagem && edOutrosCustos != "") {

        let tempData = {
            id: edUniqueID,
            data: {
                corretora: edCorretora.value,
                notaCorretagem: edNotaCorretagem.value,
                dataPregao: edDataPregao.value,
                ativo: edAtivo.value,
                quantidade: edQuantidade.value,
                operacao: edOperacao.value,
                tipoAtivo: edTipoAtivo.value,
                preco: edPreco.value,
                corretagem: edCorretagem.value,
                outrosCustos: edOutrosCustos.value,
                uniqueId: edUniqueID,
            },
        };

        // replace decimal digit character in order to calculate total value
        preco = tempData.data.preco.replace(',', '.');
        tempData.data.preco = parseFloat(preco).toFixed(2);
        corretagem = tempData.data.corretagem.replace(',', '.');
        tempData.data.corretagem = parseFloat(corretagem).toFixed(2);
        outrosCustos = tempData.data.outrosCustos.replace(',', '.');
        tempData.data.outrosCustos = parseFloat(outrosCustos).toFixed(2);
        valorTotal = (parseFloat(tempData.data.quantidade) * parseFloat(preco)) + parseFloat(corretagem) + parseFloat(outrosCustos);
        tempData.data.valorTotal = valorTotal.toFixed(2);

        localStorage.setItem("tempData", JSON.stringify(tempData));

        for (let i = 0; i < tradeData.length; i++) {
            // console.log(tradeData[i].id === edUniqueID);
            if(tradeData[i].id === edUniqueID) {
                tradeData[i] = tempData;
            }
        }

        localStorage.setItem("tradeData", JSON.stringify(tradeData));
    }
});

function loadData(filePath, storageKey) {
    fetch(filePath)
        .then(response => response.json())
        .then(data => {
            localStorage.setItem(storageKey, JSON.stringify(data)
        );
    })
    .catch(error => console.error(error));
}

importButton.addEventListener("click", function() {
    loadData("data/trade_history.JSON", "tradeData");

    if (localStorage.getItem("tradeData") != null) {

        let tradeData = JSON.parse(localStorage.getItem("tradeData"));

        for (let i = 0; i < tradeData.length; i++) {
            createTableRow(tradeData[i]);
        }
    }

    setTimeout(() => {
        document.location.reload();
    }, 1000);

    alert("Dados carregados com sucesso no localStorage!");

});

document.addEventListener("DOMContentLoaded", function() {
    
    if (localStorage.getItem("tradeData") != null) {

        let tradeData = JSON.parse(localStorage.getItem("tradeData"));

        for (let i = 0; i < tradeData.length; i++) {
            createTableRow(tradeData[i]);
        }
    }
});

// document.getElementById("table-content")



// function transformJSON() {
//     getData();
//     let tempData = new Array();
//     console.log(tempData);
//     for (let i = 0; i < tradeData.length; i++) {
//         tempData[i] = {
//             "id": tradeData[i].id,
//             "data": {
//                 "corretora": tradeData[i].corretora,
//                 "notaCorretagem": tradeData[i].notaCorretagem,
//                 "dataPregao": tradeData[i].dataPregao,
//                 "tipoAtivo": tradeData[i].tipoAtivo,
//                 "operacao": tradeData[i].operacao,
//                 "ativo": tradeData[i].ativo,
//                 "quantidade": tradeData[i].quantidade,
//                 "preco": tradeData[i].preco,
//                 "corretagem": tradeData[i].corretagem,
//                 "outrosCustos": tradeData[i].outrosCustos,
//                 "valorTotal": tradeData[i].valorTotal,
//                 "acao": "",
//                 "uniqueEmpId": tradeData[i].uniqueEmpId,
//             }
//         }
//     }
//     console.log(tempData);
//     localStorage.setItem("tempData", JSON.stringify(tempData));
// }
