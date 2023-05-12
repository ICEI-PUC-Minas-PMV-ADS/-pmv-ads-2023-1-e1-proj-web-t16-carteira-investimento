// Página inicial de Login
const LOGIN_URL = "login.html";

// Retrai e expande a sidebar
$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});

// Verifica se o usuário já esta logado e se negativo, redireciona para tela de login        
function checkLoggedIn() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  
    if (!currentUser) {
      window.location.href = "login.html";
    }
  };
  
  function logout() {
    localStorage.removeItem("currentUser");
    alert("Logoff efetuado com sucesso!");
  }
  

function displayCurrentUser() {
    
    const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));

    if (currentUser) {
        document.getElementById("current-user").textContent = currentUser.name;
    }
};

// Associa ao evento de carga da página a função para verificar se o usuário está logado
window.addEventListener('load', displayCurrentUser);

document.addEventListener("DOMContentLoaded", function() {
    // checkLoggedIn();
    displayCurrentUser();
  });
  
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (currentUser) {
    document.getElementById("current-user").textContent = currentUser.name;
}

const logoutButton = document.getElementById("logout-link");
    logoutButton.addEventListener("click", function() {
    logout();
    window.location = LOGIN_URL;
});

