function showGif() {
    let gifContainer = document.getElementById('yes-gif');
    gifContainer.style.display = 'block';

    // Hide the GIF after 5 seconds
    setTimeout(() => {
        gifContainer.style.display = 'none';
    }, 5000);
}

function askAgain() {
    let noButton = document.querySelector('.no-btn');
    let messageBox = document.getElementById('message-box');

    if (!noButton.dataset.clicked) {
        alert('Are you sure?');
        noButton.dataset.clicked = "true";
    } else {
        messageBox.style.display = 'block';
        noButton.style.position = 'absolute';
        noButton.style.left = Math.random() * window.innerWidth + 'px';
        noButton.style.top = Math.random() * window.innerHeight + 'px';
    }
}

// Floating hearts animation
function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.body.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 5000);
}

setInterval(createHeart, 500);
