// Ajout de la fonction affichePopup sur chaque case

// Fonction qui ouvre une pop up
function affichePopup(id, url) {
    var url = "img/fenêtres/fenêtre_gagnant.svg"; //test
    if(url == "img/fenêtres/fenêtre_gagnant.svg"){
        var audio = new Audio("music/son_gagnant.mp3");
        audio.play();
    }
    var fenêtre = document.getElementById("fenêtre");
    var message = document.getElementById("message");
    // Floutage du background
    document.getElementById("calendrier").style.opacity = 0.05;
    document.getElementById("header").style.opacity = 0.05;
    document.getElementById("footer").style.opacity = 0.05;
    message.data = url;
    fenêtre.style.display = "block";
    fenêtre.style.animationName = "slide-in-bottom";
    fenêtre.style.animationDuration = "2s";
}