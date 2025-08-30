const identifiant = document.querySelector("#Identifiant input"); 
const password = document.querySelector("#password input");
const Seconnecter = document.getElementById("Seconnecter");
const un = document.getElementById("un");
const deux = document.getElementById("deux");

// Quand on clique sur "Se connecter"
Seconnecter.addEventListener("click", function() {
    // Vérifie si le champ identifiant est vide
    if (identifiant.value.trim().length === 0) {
        un.textContent = "Vous devez remplir le champ !";
        un.style.color = "red";
    } else {
        un.textContent = ""; // efface l’erreur si rempli
    }

    // Vérifie si le champ mot de passe est vide
    if (password.value.trim().length === 0) {
        deux.textContent = "Vous devez remplir le champ !";
        deux.style.color = "red";
    } else {
        deux.textContent = "";
    }
});