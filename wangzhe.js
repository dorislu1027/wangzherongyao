const button = document.getElementById("showButton");
const potion = document.getElementById("letter");

button.addEventListener("click", function () {
    potion.classList.toggle("hidden");
});
