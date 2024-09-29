let play = document.getElementById('playMusicBtn');

function showButton(){
    document.getElementById('hiddenBtn').style.display = 'block';
}

setTimeout(showButton, 20000);

function playMusic(){
    let audio = Audio = new Audio("../../Media/glueSong.mp3");
    audio.play();
}

play.addEventListener("click", () => {
    playMusic()
    setTimeout(nextPage, 45000);
})

function nextPage(){
    window.location = 'letter.html';
}



