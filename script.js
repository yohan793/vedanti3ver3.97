let noClickCount = 0;

function showFireworks() {
    document.getElementById('fireworks').style.display = 'block';
}

function askAgain() {
    let noButton = document.querySelector('.no-btn');
    let messageBox = document.getElementById('message-box');

    if (noClickCount === 0) {
        alert('Are you sure?');
        noClickCount++;
    } else if (noClickCount === 1) {
        messageBox.style.display = 'block'; // Show heartfelt message
        noClickCount++;
    } else {
        noButton.style.position = 'absolute';
        noButton.style.left = Math.random() * window.innerWidth + 'px';
        noButton.style.top = Math.random() * window.innerHeight + 'px';
    }
}

// Generate Floating Hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // Random speed

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 500); // Create a new heart every 0.5s
