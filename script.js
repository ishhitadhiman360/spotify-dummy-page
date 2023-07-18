var playbtn = document.getElementsByClassName("play-button");
var player = document.getElementById("music-player");

var showPlayer = function() {
    player.style.display= "block";
};

for (var i = 0; i < playbtn.length; i++) {
    playbtn[i].addEventListener('click', showPlayer);
}