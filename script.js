// Ajout de la fonction affichePopup sur chaque case
const cases = document.getElementsByClassName('case');
for (let i = 0; i < cases.length; i++) {
    cases[i].addEventListener("click", function () {
        affichePopup("assets/fenetre_gagnants.svg");
    });
}
document.getElementById("fermer").onclick = function () {
    fermerPopup();
};


// Fonction qui ouvre une pop up
function affichePopup(url) {
    if(url === "assets/fenêtre_gagnant.svg"){

    }
    const popup = document.getElementById("popup");
    const message = document.getElementById("message");
    document.getElementById("calendrier").style.pointerEvents = "none";
    document.getElementById("calendrier-mobile").style.pointerEvents = "none";
    message.data = url;
    setTimeout(function (){
        document.getElementById("calendrier").style.opacity = "0.2";
        document.getElementById("calendrier-mobile").style.opacity = "0.2";
        document.getElementById("logo_calendrier").style.opacity = "0.2";
        popup.style.display = "block";
        document.getElementById("popup").style.animationName = "enter";
        document.getElementById("popup").style.animationDuration = "1s";
    }, 200);
}

// Fonction qui ferme une pop up
function fermerPopup(){
    document.getElementById("calendrier").style.opacity = "1";
    document.getElementById("calendrier-mobile").style.opacity = "1";
    document.getElementById("logo_calendrier").style.opacity = "1";
    document.getElementById("calendrier").style.pointerEvents = "auto";
    document.getElementById("calendrier-mobile").style.pointerEvents = "auto";
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}