const findNewsApi = async () => {
  const url =
    "https://newsapi.org/v2/everything?q=Disney+&from=2023-09-15&apiKey=c3a8a3012945473c84bfabaa97cd402c";
  const response = await fetch(url);
  const newsList = await response.json();
  return newsList.articles;
};

const createNewsList = async () => {
  const news = await findNewsApi();
  const ulPoint = document.getElementById("listaNoticias");
  console.log(ulPoint);

  for (let i = 0; i < 4; i++) {
    const content = news[i].content;
    const bulletPoint = document.createElement("li");
    console.log(content);
    console.log(bulletPoint);
    bulletPoint.innerText = content;
    ulPoint.appendChild(bulletPoint);
  }
};

createNewsList();
