const hearts = ['❤️', '💖', '💗', '💘', '💕'];

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = 4 + Math.random() * 4 + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 8000);
}
setInterval(createHeart, 500);

function showSurprise() {
    document.getElementById('surprise').style.display = 'block';
    for (let i = 0; i < 15; i++) setTimeout(createHeart, i * 100);
}
