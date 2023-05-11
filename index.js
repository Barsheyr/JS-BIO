const btn = document.getElementById("btn");
const updateText = document.getElementById("update-text");

btn.addEventListener("click", function () {
  const newText = updateText.textContent.trim();
  if (newText === "I am currently learning HTML and CSS") {
    updateText.textContent = "I am currently learning JavaScript";
  } else {
    updateText.textContent = "I am currently learning HTML and CSS";
  }
});
