
const button = document.getElementById("showbutton");
const buttonText = document.getElementById("buttonText");
const letter = document.getElementById("letter");

button.addEventListener("click", function () {
    letter.classList.toggle("hidden");

    if (letter.classList.contains("hidden")) {
        buttonText.textContent = "致王者的一封信";
    } else {
        buttonText.textContent = "收起信件";
    }
});
