// Verifica se o usuário já esta logado e se negativo, redireciona para tela de login        
function checkLoggedIn() {
    const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
  
    if (!currentUser) {
      window.location.href = "login.html";
    }
};

// Run scripts on page load
document.addEventListener("DOMContentLoaded", function() {
  checkLoggedIn();
});