const input = document.querySelector("#image");
const previewImage = document.querySelector("#preview-image");
const previewImageMin = document.querySelector("#preview-image-min");

// Verifica se há uma imagem de perfil salva no LocalStorage
const savedProfileImagePath = localStorage.getItem("profileImagePath");
// Verifica se há uma imagem principal salva no LocalStorage
const savedImagePath = localStorage.getItem("imagePath");

if (savedProfileImagePath) {
  // Define a imagem de perfil salva no LocalStorage como a origem da imagem do menu
  const menuImage = document.querySelector("#preview-image-min");
  menuImage.src = "https://source.unsplash.com/random";
}
else{
  const menuImage = document.querySelector("#preview-image-min");
  menuImage.src = "https://source.unsplash.com/random";
}

if(savedImagePath){
  var imgmin = document.querySelector("#preview-image-min");
  previewImage.src = savedImagePath;
}
else {
  var imgmin = document.querySelector("#preview-image-min");
  previewImage.src = "https://source.unsplash.com/random";
}

// 'change' muda a imagem quando o usuário insere a imagem
input.addEventListener("change", function(e) {
  const tgt = e.target || window.event.srcElement;
  const files = tgt.files;
  const fr = new FileReader();

  fr.onload = function() {
    const imagePath = fr.result;
    const profileImage = URL.createObjectURL(files[0]);

    // Salva o caminho da imagem de perfil no LocalStorage
    localStorage.setItem("profileImagePath", profileImage);

    // Salva o caminho da imagem principal no LocalStorage
    localStorage.setItem("imagePath", imagePath);

    previewImage.src = imagePath;
    previewImageMin.src = profileImage;
  };

  fr.readAsDataURL(files[0]);
});

document.addEventListener("DOMContentLoaded", function(){
  const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
  document.getElementById("mName").textContent = currentUser.name;
  document.getElementById("mEmail").textContent = currentUser.email;
});


function goProfile() {
  window.location = "profile.html"
}

function goRentabilidade() {
  window.location = "rentabilidade.html"
}
