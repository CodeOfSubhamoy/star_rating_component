const counter = document.getElementById("count");

const starContainer = document.getElementById("star-container");
let selected = 0;
const stars = document.querySelectorAll(".star");
starContainer.addEventListener("click", function (event) {
  selected = event.target.dataset["index"];
  for (let i = 0; i < stars.length; i++) {
    stars[i].classList.remove("star-filled");
  }
  for (let i = 0; i < event.target.dataset["index"]; i++) {
    stars[i].classList.add("star-filled");
  }
  counter.innerText = selected;
});
starContainer.addEventListener("mouseover", function (event) {
  for (let i = 0; i < stars.length; i++) {
    stars[i].classList.remove("star-filled");
  }
  for (let i = 0; i < event.target.dataset["index"]; i++) {
    stars[i].classList.add("star-filled");
  }
});
starContainer.addEventListener("mouseleave", function (event) {
  for (let i = 0; i < stars.length; i++) {
    stars[i].classList.remove("star-filled");
  }
  for (let i = 0; i < selected; i++) {
    stars[i].classList.add("star-filled");
  }
});
