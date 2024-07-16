const icon = document.querySelector(".loading i");
const closeButton = document.querySelector(".close-button");
const container = document.querySelector(".container");

icon.addEventListener("click", () => {
  container.classList.add("change");
});
closeButton.addEventListener("click", () => {
  container.classList.remove("change");
});
