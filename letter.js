let audio1;
let audio2;
function playMusic1(){
    audio1 = Audio = new Audio("../../Media/glueSongPart2.mp3");
    audio1.addEventListener('ended', () => {
        playWholeSong();
    })
    audio1.play();
}

function playWholeSong(){
    audio2 = Audio = new Audio("../../Media/glueSong.mp3");

    audio2.addEventListener('ended', () => {
        audio2.currentTime = 0; // reset to beginning
        audio2.play();
    })
    audio2.play();
}

window.addEventListener('load', playMusic1);


let rolled = document.getElementById('beforeUnroll');
let unrolled = document.getElementById('afterUnroll');

rolled.addEventListener('click', () => {
    rolled.classList.add('hidden');
    unrolled.classList.remove('hidden');
});