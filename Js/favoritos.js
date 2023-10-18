const getFavorites = async () => {
  const url =
    "https://api.themoviedb.org/3/account/20589935/favorite/movies?language=en-US&page=1&sort_by=created_at.asc";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzNlMzJkMzA3NDM2ZTBhYmIzYTJjOGU2ODNhNGVkMCIsInN1YiI6IjY1MmYwZjRhMGNiMzM1MTZmODg1MTk2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WzFq8Busf7bRCaKvPh1HqBd4uYM9jqJM7OvGQShCImw",
    },
  };
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Request failed with status " + response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao obter dados de favoritos:", error);
    return null;
  }
};

const listaFilmes = async () => {
  const mainContainer = document.getElementById("movies-container");
  const lista = await getFavorites();
  console.log(lista.results);
  for (let i = 0; i < lista.results.length; i++) {
    const img = document.createElement("img");
    img.src = lista.results[i].backdrop_path;
    img.className = "img-fluid";
    mainContainer.appendChild(img);
  }
};
listaFilmes();
