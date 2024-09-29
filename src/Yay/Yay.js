let play = document.getElementById('confettiBtn');

function playMusic(){
    let audio = Audio = new Audio("../../Media/CheeringSoundEffect.mp3");
    audio.play();
}

play.addEventListener("click", () => {
    playMusic();
});

document.getElementById('continueBtn').addEventListener('click', () => {
    window.location = '../Flower/Flower.html';
});