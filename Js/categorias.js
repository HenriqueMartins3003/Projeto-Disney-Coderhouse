const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const btnSearch = document.getElementById("btnSearch");
const modal = document.getElementById("myModal");
const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");

//searchInput.addEventListener("input", performSearch);
btnSearch.addEventListener("submit", performSearch);

openModalButton.addEventListener("click", () => {
  modal.style.display = "block";
  performSearch();
});

closeModalButton.addEventListener("click", () => {
  modal.style.display = "none";
});

function performSearch() {
  const query = searchInput.value.toLowerCase();

  // Clear previous search results
  searchResults.innerHTML = "";
}

  // Perform search and display results
  if (query.length === 0) {
    return;
const findNewsApi = async () => {
  const url =
    "https://newsapi.org/v2/everything?q=Disney+&from=2023-09-15&apiKey=c3a8a3012945473c84bfabaa97cd402c";
  const response = await fetch(url);
  const newsList = await response.json();
  return newsList.articles;
};

const createNewsList = async () => {
  const news = await findNewsApi();
  const ulPoint = document.getElementById("listaCategorias");
  console.log(ulPoint);

  for (let i = 0; i < 4; i++) {
    const content = categorias[i].content;
    const bulletPoint = document.createElement("li");
    console.log(content);
    console.log(bulletPoint);
    bulletPoint.innerText = content;
    ulPoint.appendChild(bulletPoint);
  }
};

  const pageContent = document.body.textContent.toLowerCase();

  if (pageContent.includes(query)) {
    const resultElement = document.createElement("div");
    resultElement.innerHTML = `<p>aqui a palavra: "${query}" na pagina.</p>`;
    searchResults.appendChild(resultElement);
  } else {
    searchResults.innerHTML = "Sem Resultados.";
  }
}
createNewsList();