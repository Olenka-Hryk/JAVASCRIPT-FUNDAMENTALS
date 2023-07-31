const btnVote = document.getElementById("btnVote");

btnVote.addEventListener("click", async () => {
  const response = await getVoteMessage();
  btnVote.innerText = response;
});

function getVoteMessage() {
  return fetch(
    "http://127.0.0.1:3300/vote",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then((res) => res.text());
}