const list = document.getElementById("listBookAuthors");
const btnDownloadBooks = document.getElementById("btnDownloadBooks");

btnDownloadBooks.addEventListener("click", async () => {
  try {
    await getAuthor();
    btnDownloadBooks.innerText = "Downloaded!";
  } catch (error) {
    showAlert("error", error.message);
  }
});

function getAuthor() {
  return fetch(
    "http://127.0.0.1:3300/books/authors",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then((res) => res.json())
    .then((authors) => {
      for (const author of authors) {
        addAuthor(author);
      }
    });
}

function addAuthor({ author }) {
  const li = document.createElement("li");
  li.innerText = author;
  list.append(li);
}