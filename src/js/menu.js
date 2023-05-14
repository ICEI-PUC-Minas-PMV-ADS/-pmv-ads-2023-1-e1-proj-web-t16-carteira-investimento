// Retrai e expande a sidebar
$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
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
    displayCurrentUser();
  });

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

// Sidebar links
const dasboard = document.getElementById("dashboard");
dasboard.addEventListener("click", function() {
    window.location = "home.html";
});

const portfolioSettings = document.getElementById("portfolio-settings");
    portfolioSettings.addEventListener("click", function() {
    window.location = "#";
});

const portfolioReturns = document.getElementById("portfolio-returns");
    portfolioReturns.addEventListener("click", function() {
    window.location = "#";
});

const portfolioEquity = document.getElementById("portfolio-equity");
    logoutButton.addEventListener("click", function() {
    window.location = "#";
});

const portfolioTransactions = document.getElementById("portfolio-transactions");
    portfolioTransactions.addEventListener("click", function() {
    window.location = "por_transactions.html";
});

const portfolioDividends = document.getElementById("portfolio-dividends");
    portfolioDividends.addEventListener("click", function() {
    window.location = "#";
});

const reportReturns = document.getElementById("report-returns");
    reportReturns.addEventListener("click", function() {
    window.location = "#";
});

const reportEquity = document.getElementById("report-equity");
    reportEquity.addEventListener("click", function() {
    window.location = "#";
});

const reportTransactions = document.getElementById("report-transactions");
    reportTransactions.addEventListener("click", function() {
    window.location = "#";
});

const reportDividends = document.getElementById("report-dividends");
    reportDividends.addEventListener("click", function() {
    window.location = "#";
});

const reportTaxes = document.getElementById("report-taxes");
    reportTaxes.addEventListener("click", function() {
    window.location = "#";
});

