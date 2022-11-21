// Ajout des events
const cases = document.getElementsByClassName('case');
for (let i = 0; i < cases.length; i++) {
    cases[i].addEventListener("click", function () {
        affichePopup("assets/fenetre_gagnant.svg");
    });
}

const audio = new Audio("audio/fond_sonore.mp3");

document.getElementById("son_on").onclick = function () {
    pauseFondSonore();
};

document.getElementById("son_off").onclick = function () {
    playFondSonore();
};

// Fonction qui ouvre une pop up
function affichePopup(url) {
    const message = document.getElementById("modal-content");
    message.style.background = "url(" + url + ") ";
    message.style.backgroundSize = "cover";
        if(url === "assets/fenetre_gagnant.svg"){
            const audio_gagnant = new Audio("audio/son_gagnant.mp3");
            audio_gagnant.play();
        } else if(url === "assets/fenetre_perdant.svg" || url === "assets/fenetre_deja_joué.svg" || url === "assets/fenetre_erreur.svg"){
            const audio_perdant = new Audio("audio/son_perdant.mp3");
            audio_perdant.play();
            document.getElementById("texte_photo").style.display = "none";
            document.getElementById("photo_cadeau").style.display = "none";
        } else if(url === "assets/fenetre_fin_jeu.svg"){
            document.getElementById("texte_photo").style.display = "none";
            document.getElementById("photo_cadeau").style.display = "none";
        }
}

// Fonctions qui gère le fond sonore
function playFondSonore(){
    const son_off = document.getElementById("son_off");
    const son_on = document.getElementById("son_on");
    son_on.style.display = "block";
    son_off.style.display = "none";
    audio.loop = true;
    audio.play();
}

function pauseFondSonore(){
    audio.pause();
    const son_off = document.getElementById("son_off");
    const son_on = document.getElementById("son_on");
    son_on.style.display = "none";
    son_off.style.display = "block";
}