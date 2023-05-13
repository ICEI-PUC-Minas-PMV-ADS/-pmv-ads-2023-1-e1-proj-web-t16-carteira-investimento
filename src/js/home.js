// Retrai e expande a sidebar
$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});

// Verifica se o usuário já esta logado e se negativo, redireciona para tela de login        
function checkLoggedIn() {
    const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
  
    if (!currentUser) {
      window.location.href = "login.html";
    }
};

// Logout
function logout() {
  sessionStorage.removeItem("currentUser");
  alert("Logoff efetuado com sucesso!");
} 

const logoutButton = document.getElementById("logout-link");
    logoutButton.addEventListener("click", function() {
    logout();
    window.location = "login.html";
});

// Display current user on navbar
function displayCurrentUser() {
    
    const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));

    if (currentUser) {
        document.getElementById("current-user").textContent = currentUser.name;
    }
};

// Run scripts on page load
document.addEventListener("DOMContentLoaded", function() {
  checkLoggedIn();
  displayCurrentUser();
});