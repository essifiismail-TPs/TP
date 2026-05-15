let div = document.getElementById("conteneur");
let paragraphe = document.getElementById("monParagraphe");
paragraphe.innerText = "Le texte a ete modifie";
paragraphe.style.backgroundColor = "lightblue";
paragraphe.style.textAlign = "center";
paragraphe.style.padding = "10px";
div.addEventListener("click", function () {
    paragraphe.innerText = "un click a ete detecte";
});