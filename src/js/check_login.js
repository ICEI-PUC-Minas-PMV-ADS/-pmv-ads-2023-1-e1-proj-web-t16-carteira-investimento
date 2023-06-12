// Check if the user  logged in
function isLoggedIn() {
  var currentUser = sessionStorage.getItem("currentUser");
  var users = localStorage.getItem("users");
  var loggedIn = false;
  for (item in currentUser) {
    if (currentUser.email == item.email && currentUser.password == item.password) {
      loggedIn = true;
    }
  }

  return loggedIn;
}

// Redirect the user to the login page
function redirectToLogin() {
  window.location.href = "login.html";
}

document.onreadystatechange = () => {
  if (document.readyState === "interactive") {
    loggedIn = isLoggedIn();
    
    if (loggedIn == false) {
      alert("Acesso restrito a usuários logados.");
      redirectToLogin();
    }
  }  
};
