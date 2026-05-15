let tacheInput = document.getElementById("tacheInput");
let listeTaches = document.getElementById("listeTaches");
let formulaire = document.getElementById("formulaire");
formulaire.addEventListener("submit", function (event) {
    event.preventDefault();
    let texteTache = tacheInput.value;
    if (texteTache === "") {
        alert("Veuillez entrer une tâche.");
        return;
    }
    let li = document.createElement("li");
    li.textContent = texteTache + " ";
    let boutonAccomplie = document.createElement("button");
    boutonAccomplie.textContent = "Accomplie";
    let boutonSupprimer = document.createElement("button");
    boutonSupprimer.textContent = "Supprimer";
    boutonAccomplie.addEventListener("click", function () {
        li.classList.toggle("accomplie");
    });
    boutonSupprimer.addEventListener("click", function () {
        li.remove();
    });
    li.appendChild(boutonAccomplie);
    li.appendChild(boutonSupprimer);
    listeTaches.appendChild(li);
    tacheInput.value = "";
}); 