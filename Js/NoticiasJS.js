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

  // Perform search and display results
  if (query.length === 0) {
    return;
  }

  const pageContent = document.body.textContent.toLowerCase();

  if (pageContent.includes(query)) {
    const resultElement = document.createElement("div");
    resultElement.innerHTML = `<p>aqui a palavra: "${query}" na pagina.</p>`;
    searchResults.appendChild(resultElement);
  } else {
    searchResults.innerHTML = "Sem Resultados.";
  }
}
