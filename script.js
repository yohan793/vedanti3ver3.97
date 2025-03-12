let noClickCount = 0;

function showFireworks() {
    let fireworks = document.getElementById('fireworks');
    fireworks.style.display = 'block';

    // Hide fireworks after 5 seconds
    setTimeout(() => {
        fireworks.style.display = 'none';
    }, 5000);
}

function askAgain() {
    let noButton = document.querySelector('.no-btn');
    let messageBox = document.getElementById('message-box');
    
    // Directly show the GIF and message
    messageBox.style.display = 'block';

    // Make the "No" button float
    noButton.style.position = 'absolute';
    noButton.style.left = Math.random() * window.innerWidth + 'px';
    noButton.style.top = Math.random() * window.innerHeight + 'px';
}

// Generate Floating Hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 500); // Create a new heart every 0.5s
