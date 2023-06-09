function definirAlerta() {
    var mensagem = document.getElementById("mensagem").value;
    var data = document.getElementById("data").value;

    var dataAtual = new Date();
    var dataSelecionada = new Date(data);

    var diferenca = dataSelecionada.getTime() - dataAtual.getTime();

    if (diferenca > 0) {
        alert("Você definiu uma alerta. ");
        setTimeout(function () {
            alert("Seu investimento " + mensagem + " está próximo do vencimento que é dia " + dataSelecionada.toLocaleString());
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
        Notification.requestPermission().then(function (permission) {
            if (permission === "granted") {
                exibirNotificacao(mensagem, diferenca);
            }
        });
    }

    function exibirNotificacao(mensagem, diferenca) {
        if (diferenca > 0) {
            alert("Você definiu uma notificação. ");
            setTimeout(function () {
                var options = {
                    body: "Seu investimento: " + mensagem + " está próximo do vencimento que é dia " + dataSelecionada.toLocaleString(),
                    icon: "path/para/o/icone.png"
                };

                var notificacao = new Notification("Notificação", options);

                setTimeout(function () {
                    notificacao.close();
                }, 5000);
            }, diferenca);
        } else {
            alert("Selecione uma data futura.");
        }
    }
}

function goNotification() {
    window.location = "notification.htm"
}
