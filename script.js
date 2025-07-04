document.body.addEventListener('click', function(e) {
    createParticle(e.clientX, e.clientY);
});

function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // কণার জন্য আরও সুন্দর এবং র্যান্ডম রঙ
    const colors = [
        '#FF6B6B', // Reddish
        '#4ECDC4', // Turquoise
        '#4F86E8', // Blue
        '#FFCD00', // Yellow
        '#A23B72', // Purple
        '#00BFFF', // Deep Sky Blue
        '#FF1493', // Deep Pink
        '#32CD32'  // Lime Green
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    particle.style.backgroundColor = randomColor;

    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    
    document.body.appendChild(particle);

    // অ্যানিমেশন শেষ হওয়ার পর কণা সরিয়ে ফেলা
    particle.addEventListener('animationend', () => {
        particle.remove();
    });
}
