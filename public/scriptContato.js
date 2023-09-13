document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector("form");
  
    formulario.addEventListener("submit", function (event) {
      event.preventDefault();
  
      alert("Formulário enviado com sucesso!");
    });
  });  
