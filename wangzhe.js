const button = document.getElementById("showButton");
const potion = document.getElementById("letter");

button.addEventListener("click", function () {
    potion.classList.toggle("hidden");
if (potion.classList.contains("hidden")) {
    button.textContent = "致王者的一封信";
    }
else {
    button.textContent = "收起信件";
    }
});
