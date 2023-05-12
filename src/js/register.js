function registerUser() {

    let newId = generateUUID ();
    const name = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    
    // check for empty fields
    if (!name || !email || !password || !confirmPassword) {
      alert("Todos os campos devem ser preenchidos.");
      return;
    }
    
    // check if password matches
    if (password !== confirmPassword) {
      alert("A senha informada não confere.");
      return;
    }
  
    // create an object to hold the user data
    const userData = {
        newId,
        name,
        email,
        password,
    };
  
    // get existing users from local storage or create empty object
    let users = JSON.parse(localStorage.getItem("users")) || [];
  
  // check if user already exists
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      alert("User with that email already exists");
      return;
    }

    // add new user data to array
    users.push(userData);

    // store updated user data in local storage
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registro efetuado com sucesso!");
    window.location = "login.html";

  }
  
// função para gerar códigos randômicos a serem utilizados como código de usuário
// Fonte: https://stackoverflow.com/questions/105034/how-to-create-guid-uuid
function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = (performance && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

 // Associar salvamento ao botao
//  document.getElementById ('btn-register').addEventListener ('click', salvaLogin);

 const registrationForm = document.getElementById("registration-form");
 registrationForm.addEventListener("submit", function(event) {
   event.preventDefault();
   registerUser();
 });

const closeButton = document.getElementById("close-button");
    closeButton.addEventListener("click", function(event) {
        window.location = "home.html";
 });

 function loginButton() {
    window.location = "login.html"
};