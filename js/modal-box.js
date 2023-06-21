let modal = document.getElementById("modal");
let form = document.querySelector(".modal__content");
let closeModal = document.getElementsByClassName("modal__close")[0];

closeModal.onclick = function () {
  form.innerHTML = "";
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    form.innerHTML = "";
    modal.style.display = "none";
  }
}