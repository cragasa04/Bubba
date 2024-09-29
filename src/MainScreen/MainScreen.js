const buttonHeight = 70;
const buttonWidth = 200;
let num = 0;
const messages =
    ["Are you sure about that",
    "You're too slow",
    "Why do you hate me",
    "Breaking my heart",
    "Pls rethink",
    "Stop being silly",
    "This is what we DOIN?",
    "Oh you wanna PLAY",]
window.addEventListener('DOMContentLoaded', () =>{

    const button = document.getElementById('noBtn');

    button.addEventListener('mouseover', () => {
        const container = document.querySelector('.mainContainer')
        const containerRect = container.getBoundingClientRect();
        const maxWidth = containerRect.width - buttonWidth;
        const maxHeight = containerRect.height - buttonHeight;
        const randomLeft = Math.floor(Math.random() * (maxWidth + 1));
        const randomTop = Math.floor(Math.random() * (maxHeight + 1));

        // Set the new position of the button
        button.style.left = randomLeft + 'px';
        button.style.top = randomTop + 'px';
        button.innerText = messages[num];
        button.style.fontSize = '2vh';
        if (num === messages.length - 1){
            num = 0;
        }
        num = num + 1;

    });
});

document.getElementById('yesBtn').addEventListener('click', () => {
    window.location = '../Yay/Yay.html';
});