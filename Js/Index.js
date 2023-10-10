//variaveis da parte de personagens
const carrosel = document.getElementById("character-carrosel");
const input = document.getElementById("input-box");
const button = document.getElementById("button-submit");
const showContainer = document.getElementById("show-container");
const listContainer = document.querySelector(".list");

// variaveis do formulario
const btnSubmitForm = document.getElementById("btnSubmit");
const emailForm = document.getElementById("emailForm");
const nomeForm = document.getElementById("nameForm");
const divPopUp = document.getElementById("myModal");
const popUp = document.getElementById("modal-content");
const closeBtn = document.getElementById("close-button");

//function personagens
button.addEventListener(
  "click",
  (getResult = async () => {
    if (input.value.trim().length < 1) {
      alert("O campo de pesquisa não pode ficar vazio!");
    }
    showContainer.innerHTML = "";
    const url = `http://gateway.marvel.com/v1/public/characters?ts=1695869773587&apikey=d67e46f5b331b89af57362e8d0316c90&hash=e3962b05f275713ac68269a9cda8c93e&name=${input.value}`;

    const response = await fetch(url);
    const jsonData = await response.json();
    jsonData.data["results"].forEach((element) => {
      showContainer.innerHTML = `<div class="card-container">
        <div class="container-character-image">
            <img src="${
              element.thumbnail["path"] + "." + element.thumbnail["extension"]
            }"/>
        </div>
        <div class="character-name">${element.name}</div>
        <div class="character-description">${element.description} </diV>
        </div>`;
    });
  })
);

window.onload = () => {
  getResult();
};

// function do formulario

btnSubmitForm.addEventListener("click", (event) => {
  event.preventDefault();

  if (!nomeForm.value.length && !emailForm.value.length) {
    const message = document.createElement("p");
    message.innerText = "Nome ou Endereço de Email invalidos!";
    popUp.appendChild(message);
    divPopUp.style.display = "block";
    return;
  }
  console.log("2");
  const message = document.createElement("p");
  message.innerText = `Parabens ${nomeForm.value} você cadastrou o email: ${emailForm.value} na nossa Newsletter`;
  console.log(message);
  popUp.appendChild(message);
  divPopUp.style.display = "block";
});

function closePopUp() {
  popUp.style.display = "none";
}

closeBtn.addEventListener("click", () => {
  closePopUp();
});
