const time = document.getElementById("time");
const date = document.getElementById("date");

setInterval(() => {
  date.textContent = new Date().toLocaleDateString();
}, 1000);

setInterval(() => {
  const currentTime = new Date().toLocaleTimeString();
  time.textContent = currentTime;
}, 1000);

// refrew
const button = document.querySelector("button");
function callMe() {}
button.addEventListener("click", callMe);

// input kiritiw
const inputEl = document.querySelector("input");
const pEl = document.querySelector("p");
inputEl.addEventListener("input", () => {
  const music = new Audio("./music/key.mp3");
  music.play();
});

// Ul ni ekranga chiqarish
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;
  ul.innerHTML += `<li>${input.value}</li>`;
  input.value = "";
  const music = new Audio("./music/ad.mp3");
  music.play();
});

// Hamma yozilgan qismni o'chirish
const remove = document.querySelector("#remove");
remove.addEventListener("click", () => {
  ul.innerHTML = "";
  const music = new Audio("./music/bel.mp3");
  music.play();
});

// yozilgan todolga tegsa faqat uwa qismin o'chib ketadi
const items = document.querySelectorAll("ul");

items.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.target.remove();
    const music = new Audio("./music/bel.mp3");
    music.play();
  });

});
