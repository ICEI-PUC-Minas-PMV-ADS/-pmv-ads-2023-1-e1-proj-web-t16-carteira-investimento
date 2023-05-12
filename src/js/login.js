

function login(email, password) {
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
  
    if (!email || !password) {
      alert("Por favor preencha todos os campos");
      return;
    }
  
    // get existing users from local storage or create empty array
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    // find user with matching email and password
    let matchingUser = null;

    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email && users[i].password === password) {
        matchingUser = users[i];
        break;
      }
    }
  
    if (!matchingUser) {
      alert("E-mail ou senha inválidos!");
      return;
    }
  
    // set current user in session storage
    sessionStorage.setItem("currentUser", JSON.stringify(matchingUser));
  
    alert("Login efetuado com sucesso!");
    window.location = "index.html"
  };

const loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    login();
    });

const closeButton = document.getElementById("close-button");
    closeButton.addEventListener("click", function(event) {
        window.location = "home.html";
 });

 function registerButton() {
    window.location = "register.html"
}