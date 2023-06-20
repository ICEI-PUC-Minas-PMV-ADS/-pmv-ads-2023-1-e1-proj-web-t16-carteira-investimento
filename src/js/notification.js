// Verificar se o navegador suporta Web Workers
if ("Worker" in window) {
    // Criar um novo Web Worker
    var worker = new Worker("worker.js");
  
    // Enviar mensagens para o Web Worker
    worker.postMessage({ type: "start" });
  } else {
    console.log("Este navegador não suporta Web Workers.");
  }

function definirAlerta() {
    var mensagem = document.getElementById("mensagem").value;
    var data = document.getElementById("data").value;
  
    var dataAtual = new Date();
    var dataSelecionada = new Date(data);
  
    var diferenca = dataSelecionada.getTime() - dataAtual.getTime();
  
    if (diferenca > 0) {
      alert("Você definiu um alerta.");
  
      // Salvar no histórico de alertas
      var historicoAlertas = JSON.parse(localStorage.getItem("historicoAlertas")) || [];
      historicoAlertas.push({
        mensagem: mensagem,
        data: dataSelecionada.toLocaleString()
      });
      localStorage.setItem("historicoAlertas", JSON.stringify(historicoAlertas));
  
      setTimeout(function() {
        alert("Seu investimento: " + mensagem + " está próximo da data selecionada " + dataSelecionada.toLocaleString());
        exibirHistorico(); // Atualizar o histórico  
      }, diferenca);
    } else {
      alert("Selecione uma data futura.");
    }
  }
  
  function definirNotificacao() {
    var mensagem = document.getElementById("mensagem").value;
    var data = document.getElementById("data").value;
  
    var dataAtual = new Date();
    var dataSelecionada = new Date(data);
  
    var diferenca = dataSelecionada.getTime() - dataAtual.getTime();
  
    if (!("Notification" in window)) {
      alert("Este navegador não suporta notificações.");
    } else if (Notification.permission === "granted") {
      exibirNotificacao(mensagem, diferenca);
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function(permission) {
        if (permission === "granted") {
          exibirNotificacao(mensagem, diferenca);
        }
      });
    }
  
    function exibirNotificacao(mensagem, diferenca) {
      if (diferenca > 0) {
        alert("Você definiu uma notificação.");
  
        // Salvar no histórico de notificações
        var historicoNotificacoes = JSON.parse(localStorage.getItem("historicoNotificacoes")) || [];
        historicoNotificacoes.push({
          mensagem: mensagem,
          data: dataSelecionada.toLocaleString()
        });
        localStorage.setItem("historicoNotificacoes", JSON.stringify(historicoNotificacoes));
  
        setTimeout(function() {
          var options = {
            body: "Seu investimento: " + mensagem + " está próximo da data selecionada " + dataSelecionada.toLocaleString(),
            icon: "path/para/o/icone.png"
          };
  
          var notificacao = new Notification("Notificação", options);
  
          setTimeout(function() {
            notificacao.close();
          }, 5000);
        }, diferenca);
      exibirHistorico(); // Atualizar o histórico    
      } else {
        alert("Selecione uma data futura.");
      }
    }
  }
  
  // Função para exibir o histórico de alertas e notificações
  function exibirHistorico() {
    var historicoAlertas = JSON.parse(localStorage.getItem("historicoAlertas")) || [];
    var historicoNotificacoes = JSON.parse(localStorage.getItem("historicoNotificacoes")) || [];
  
    var historicoContainer = document.getElementById("historico-container");
    historicoContainer.innerHTML = "";
  
    var alertasTitle = document.createElement("h2");
    alertasTitle.style.marginLeft = "2.5rem";
    alertasTitle.style.marginTop = "1rem";
    alertasTitle.style.fontFamily = "Ubuntu, sans-serif";
    alertasTitle.style.fontSize = "2.5rem";
    alertasTitle.style.fontWeight = "600";
    alertasTitle.textContent = "Histórico de Alertas";
    historicoContainer.appendChild(alertasTitle);
  
    if (historicoAlertas.length === 0) {
      var alertaMsg = document.createElement("p");
      alertaMsg.style.fontFamily = "Ubuntu, sans-serif";
      alertaMsg.style.fontSize = "1.125rem";
      alertaMsg.style.fontWeight = "400";
      alertaMsg.style.marginLeft = "4rem";
      alertaMsg.textContent = "Nenhum alerta registrado.";
      historicoContainer.appendChild(alertaMsg);
    } else {
      var alertasList = document.createElement("ul");
      historicoAlertas.forEach(function(alerta) {
        var alertaItem = document.createElement("li");
        alertaItem.style.fontFamily = "Ubuntu, sans-serif";
        alertaItem.style.fontSize = "1.5rem";
        alertaItem.style.fontWeight = "400";
        alertaItem.style.textDecoration = "none";
        alertaItem.style.listStyle = "none";
        alertaItem.style.marginLeft = "3rem";
        alertaItem.textContent = "Investimento: " + alerta.mensagem + " - Data: " + alerta.data;
        alertasList.appendChild(alertaItem);
      });
      historicoContainer.appendChild(alertasList);
    }
  
    var notificacoesTitle = document.createElement("h2");
    notificacoesTitle.style.marginLeft = "2.5rem";
    notificacoesTitle.style.marginTop = "1rem";
    notificacoesTitle.style.fontFamily = "Ubuntu, sans-serif";
    notificacoesTitle.style.fontSize = "2.5rem";
    notificacoesTitle.style.fontWeight = "600";
    notificacoesTitle.textContent = "Histórico de Notificações";
    historicoContainer.appendChild(notificacoesTitle);
  
    if (historicoNotificacoes.length === 0) {
      var notificacaoMsg = document.createElement("p");
      notificacaoMsg.style.fontFamily = "Ubuntu, sans-serif";
      notificacaoMsg.style.fontSize = "1.125rem";
      notificacaoMsg.style.fontWeight = "400";
      notificacaoMsg.style.marginLeft = "4rem";
      notificacaoMsg.textContent = "Nenhuma notificação registrada.";
      historicoContainer.appendChild(notificacaoMsg);
    } else {
      var notificacoesList = document.createElement("ul");
      historicoNotificacoes.forEach(function(notificacao) {
        var notificacaoItem = document.createElement("li");
        notificacaoItem.style.fontFamily = "Ubuntu, sans-serif";
        notificacaoItem.style.fontSize = "1.5rem";
        notificacaoItem.style.fontWeight = "400";
        notificacaoItem.style.textDecoration = "none";
        notificacaoItem.style.listStyle = "none";
        notificacaoItem.style.marginLeft = "3rem";
        notificacaoItem.textContent = "Investimento: " + notificacao.mensagem + " - Data: " + notificacao.data;
        notificacoesList.appendChild(notificacaoItem);
      });
      historicoContainer.appendChild(notificacoesList);
    }
  }
  
  // Chamar a função para exibir o histórico assim que a página carregar
  window.addEventListener("load", exibirHistorico);
  

function goNotification() {
    window.location = "notification.html"
}
