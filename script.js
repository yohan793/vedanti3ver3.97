let noClickCount = 0;

function showFireworks() {
    document.getElementById('fireworks').style.display = 'block';
}

function askAgain() {
    let noButton = document.querySelector('.no-btn');
    if (noClickCount === 0) {
        alert('Are you sure?');
        noClickCount++;
    } else {
        noButton.style.position = 'absolute';
        noButton.style.left = Math.random() * window.innerWidth + 'px';
        noButton.style.top = Math.random() * window.innerHeight + 'px';
    }
}
