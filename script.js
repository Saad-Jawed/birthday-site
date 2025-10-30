// Confetti creation
const colors = ['#ff5d8f', '#ffd6d9', '#ff9a9e', '#fff'];
for (let i = 0; i < 60; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.setProperty('--color', colors[Math.floor(Math.random() * colors.length)]);
    confetti.style.setProperty('--left', Math.random() * 100 + 'vw');
    confetti.style.animationDelay = Math.random() * 3 + 's';
    confetti.style.animationDuration = (2 + Math.random() * 3) + 's';
    document.body.appendChild(confetti);
}

// Balloons creation
const balloonColors = ['#ff8fab', '#ffb3c1', '#ffc8dd', '#ffd6d9'];
for (let i = 0; i < 6; i++) {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.style.setProperty('--color', balloonColors[Math.floor(Math.random() * balloonColors.length)]);
    balloon.style.left = Math.random() * 100 + 'vw';
    balloon.style.animationDuration = (8 + Math.random() * 5) + 's';
    document.body.appendChild(balloon);
}

// Surprise button
function showSurprise() {
    const msg = document.getElementById('surprise');
    msg.style.display = 'block';
    // msg.style.animation = 'fadeInScale 1s ease forwards';
}