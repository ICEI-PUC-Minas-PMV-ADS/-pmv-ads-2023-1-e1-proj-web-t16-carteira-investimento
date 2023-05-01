function carregaPagina() {
  event.preventDefault();
  const url = event.target.href;
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onload = function () {
    if (xhr.status === 200) {
      const content = document.querySelector("#content");
      content.innerHTML = xhr.responseText;
    }
  };
  xhr.send();
}