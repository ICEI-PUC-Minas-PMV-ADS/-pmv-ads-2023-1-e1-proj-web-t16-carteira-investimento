const input = document.querySelector("#image");
const previewImage = document.querySelector("#preview-image");
const previewImageMin = document.querySelector("#preview-image-min");

// Verifica se há uma imagem de perfil salva no LocalStorage
const savedProfileImage = localStorage.getItem("profileImage");

if (savedProfileImage) {
  // Define a imagem de perfil salva no LocalStorage como a origem da imagem do menu
  const menuImage = document.querySelector("#preview-image-min");
  menuImage.src = savedProfileImage;
}

// Verifica se há uma imagem principal salva no LocalStorage
const savedImagePath = localStorage.getItem("imagePath");

if (savedImagePath) {
  var imgmin = document.getElementById("preview-image-min");
  previewImageMin.src = 'https://source.unsplash.com/random';
  previewImage.src = savedImagePath;
}

else{
  var imgmin = document.getElementById("preview-image-min");
  imgmin.style.width = '36px';
  imgmin.style.height = '36px';
  previewImageMin.src = 'https://source.unsplash.com/random';
}

// 'change' muda a imagem quando o usuário insere a imagem
input.addEventListener("change", function(e) {
  const tgt = e.target || window.event.srcElement;
  const files = tgt.files;
  const fr = new FileReader();

  fr.onload = function() {
    const imagePath = fr.result;
    const profileImage = URL.createObjectURL(files[0]);

    // Salva a imagem de perfil no LocalStorage
    localStorage.setItem("profileImage", profileImage);

    // Salva a imagem principal no LocalStorage
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
