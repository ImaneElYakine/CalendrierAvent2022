// Ajout des events
const cases = document.getElementsByClassName('case');
for (let i = 0; i < cases.length; i++) {
    cases[i].addEventListener("click", function () {
        affichePopup("assets/fenetre_gagnant.svg");
    });
}
document.getElementById("fermer").onclick = function () {
    fermerPopup();
};

const audio = new Audio("audio/fond_sonore.mp3");

document.getElementById("son_on").onclick = function () {
    pauseFondSonore();
};

document.getElementById("son_off").onclick = function () {
    playFondSonore();
};

// Fonction qui ouvre une pop up
function affichePopup(url) {
    const popup = document.getElementById("popup");
    const message = document.getElementById("message");
    document.getElementById("calendrier").style.pointerEvents = "none";
    document.getElementById("calendrier-mobile").style.pointerEvents = "none";
    message.data = url;
    setTimeout(function (){
        if(url === "assets/fenetre_gagnant.svg"){
            const audio_gagnant = new Audio("audio/son_gagnant.mp3");
            audio_gagnant.play();
        }

        if(url === "assets/fenêtre_perdant.svg" || url === "assets/fenetre_deja_joué.svg" || url === "assets/fenetre_erreur.svg"){
            const audio_perdant = new Audio("audio/son_perdant.mp3");
            audio_perdant.play();
            document.getElementById("photo_cadeau").style.display = "none";
            document.getElementById("texte_photo").style.display = "none";
        }

        document.getElementById("calendrier").style.opacity = "0.2";
        document.getElementById("calendrier-mobile").style.opacity = "0.2";
        document.getElementById("mention_legales").style.opacity = "0.2";
        document.getElementById("header").style.opacity = "0.2";
        popup.style.display = "block";
        document.getElementById("popup").style.animationName = "enter";
        document.getElementById("popup").style.animationDuration = "1s";
    }, 200);
}

// Fonction qui ferme une pop up
function fermerPopup(){
    document.getElementById("calendrier").style.opacity = "1";
    document.getElementById("calendrier-mobile").style.opacity = "1";
    document.getElementById("header").style.opacity = "1";
    document.getElementById("mention_legales").style.opacity = "1";
    document.getElementById("calendrier").style.pointerEvents = "auto";
    document.getElementById("calendrier-mobile").style.pointerEvents = "auto";
    const popup = document.getElementById("popup");
    popup.style.display = "none";
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