// Função para exibir um alerta
function exibirAlerta(mensagem) {
    // Código para exibir o alerta
    alert(mensagem);
  }
  
  // Função para exibir uma notificação
  function exibirNotificacao(mensagem) {
    // Verificar se as notificações são suportadas pelo navegador
    if ("Notification" in window) {
      // Verificar se o usuário deu permissão para receber notificações
      if (Notification.permission === "granted") {
        // Criar a notificação
        var options = {
          body: mensagem,
          icon: "path/para/o/icone.png"
        };
        new Notification("Notificação", options);
      } else if (Notification.permission !== "denied") {
        // Solicitar permissão para mostrar notificações
        Notification.requestPermission().then(function(permission) {
          if (permission === "granted") {
            // Criar a notificação
            var options = {
              body: mensagem,
              icon: "path/para/o/icone.png"
            };
            new Notification("Notificação", options);
          }
        });
      }
    } else {
      console.log("Este navegador não suporta notificações.");
    }
  }
  
  // Função para verificar periodicamente se há notificações ou alertas a serem exibidos
  function verificarNotificacoes() {
    // Definir um intervalo para verificar a cada 5 segundos (ou o intervalo desejado)
    setInterval(function() {
      // Verificar se há notificações ou alertas no LocalStorage
      var notificacoes = JSON.parse(localStorage.getItem("notificacoes")) || [];
  
      // Percorrer as notificações e alertas
      for (var i = 0; i < notificacoes.length; i++) {
        var notificacao = notificacoes[i];
  
        // Verificar se a notificação ou alerta deve ser exibido no momento
        var diferenca = notificacao.data.getTime() - Date.now();
  
        if (diferenca <= 0) {
          // Remover a notificação ou alerta do LocalStorage
          notificacoes.splice(i, 1);
          i--;
  
          // Exibir a notificação ou alerta
          if (notificacao.type === "alert") {
            exibirAlerta(notificacao.mensagem);
          } else if (notificacao.type === "notificacao") {
            exibirNotificacao(notificacao.mensagem);
          }
        }
      }
  
      // Atualizar o LocalStorage com as notificações ou alertas restantes
      localStorage.setItem("notificacoes", JSON.stringify(notificacoes));
    }, 5000); // Verificar a cada 5 segundos (ou o intervalo desejado)
  }
  
  // Escutar as mensagens recebidas do script principal
  self.onmessage = function(event) {
    if (event.data.type === "start") {
      verificarNotificacoes();
    }
  };
  