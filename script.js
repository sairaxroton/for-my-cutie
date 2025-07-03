document.addEventListener('DOMContentLoaded', () => {
    const initialScreen = document.getElementById('initialScreen');
    const goAheadBtn = document.getElementById('goAheadBtn');
    const questionScreen = document.getElementById('questionScreen');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const finalMessageScreen = document.getElementById('finalMessageScreen');
    const noMessageDisplay = document.getElementById('noMessageDisplay');

    let noClickCount = 0;
    const maxNoClicks = 12;

    const romanticMessages = [
        "ইসসস... ভুল করে ক্লিক করলে নাকি? আরেকবার চেষ্টা করো প্লিজ! 🥰",
        "আমি জানি তুমি আমাকে ভালোবাসো, তাহলে 'না' বলছো কেন? 🥺",
        "আমার হৃদয় ভেঙে দিও না তো! 'হ্যাঁ' বলো না প্লিজ... 💖",
        "তুমি কি আমার সবটা নও? একবার ভেবে দেখো! 😔",
        "আরেকবার সুযোগ দাও, জান! তুমি তো জানো আমি তোমাকে কতটা ভালোবাসি! 🥹",
        "এইটা তোমার ফাইনাল উত্তর হতে পারে না! মন থেকে বলো... ❤️",
        "আমার জীবন শুধু তুমি! 'না' বললে বাঁচবো কীভাবে? 😭",
        "তুমি না আমার স্বপ্ন, আমার সব! প্লিজ 'হ্যাঁ' বলো! ✨",
        "আমার পৃথিবীর সব আলো তুমি! 'না' বলে অন্ধকার করে দিও না! 💫",
        "তোমাকে ছাড়া এক মুহূর্তও ভাবা যায় না! বলো না, 'হ্যাঁ'!",
        "যদি 'হ্যাঁ' না বলো, আমি কিন্তু তোমার পিছু ছাড়বো না! 😉",
        "আমার ভালোবাসা, আমার সবটুকু আবেগ... শুধু তোমার জন্য! 'হ্যাঁ' বলো! 😍"
    ];

    function showScreen(screenToShow) {
        [initialScreen, questionScreen, finalMessageScreen].forEach(screen => {
            screen.classList.add('hidden');
            screen.classList.remove('flex');
            screen.classList.remove('animate-fade-in', 'animate-fade-in-delay');
        });

        screenToShow.classList.remove('hidden');
        screenToShow.classList.add('flex');
        screenToShow.classList.add('animate-fade-in');
    }

    // ফাংশন: বাটন ক্লিকের সময় পার্টিকেল তৈরি করা
    function createClickParticles(event, color) {
        const particleCount = 15;
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('click-particle');
            document.body.appendChild(particle);

            const size = Math.random() * 10 + 5; // 5px to 15px
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.backgroundColor = color; // বাটন অনুযায়ী রঙ
            particle.style.left = `${event.clientX - size / 2}px`;
            particle.style.top = `${event.clientY - size / 2}px`;

            const angle = Math.random() * 360;
            const distance = Math.random() * 100 + 50; // 50px to 150px
            const translateX = distance * Math.cos(angle * Math.PI / 180);
            const translateY = distance * Math.sin(angle * Math.PI / 180);

            particle.style.transform = `translate(${translateX}px, ${translateY}px) scale(0)`;
            particle.style.opacity = '0';
            particle.style.transition = 'transform 0.8s ease-out, opacity 0.8s ease-out';

            setTimeout(() => {
                particle.remove();
            }, 800);
        }
    }

    // ফাংশন: ফুল ঝরার অ্যানিমেশন
    function createFlowerRain() {
        const flowerContainer = document.createElement('div');
        flowerContainer.classList.add('flower-rain-container');
        document.body.appendChild(flowerContainer);

        const numberOfFlowers = 50; // ফুলের সংখ্যা
        for (let i = 0; i < numberOfFlowers; i++) {
            const flower = document.createElement('div');
            flower.classList.add('falling-flower');
            flowerContainer.appendChild(flower);

            const size = Math.random() * 20 + 10; // 10px to 30px
            flower.style.width = `${size}px`;
            flower.style.height = `${size}px`;
            flower.style.left = `${Math.random() * 100}vw`; // স্ক্রিনের বাম থেকে ডানে র্যান্ডম পজিশন
            flower.style.animationDuration = `${Math.random() * 5 + 5}s`; // 5s to 10s
            flower.style.animationDelay = `${Math.random() * 5}s`; // Stagger delay
            flower.style.opacity = Math.random() * 0.5 + 0.5; // 0.5 to 1
        }

        setTimeout(() => {
            flowerContainer.remove(); // অ্যানিমেশন শেষে কন্টেইনার সরিয়ে ফেলা
        }, 12000); // 12 সেকেন্ড পর সরিয়ে ফেলা
    }


    showScreen(initialScreen);

    goAheadBtn.addEventListener('click', (event) => {
        createClickParticles(event, '#FF69B4'); // পিঙ্ক কালার
        showScreen(questionScreen);
    });

    noBtn.addEventListener('click', (event) => {
        createClickParticles(event, '#FF4500'); // কমলা/লাল কালার
        noClickCount++;

        const messageIndex = Math.min(noClickCount - 1, romanticMessages.length - 1);
        noMessageDisplay.textContent = romanticMessages[messageIndex];
        noMessageDisplay.classList.remove('hidden');
        noMessageDisplay.classList.remove('animate-fade-in');
        void noMessageDisplay.offsetWidth;
        noMessageDisplay.classList.add('animate-fade-in');

        const scaleFactor = 1 + (noClickCount * 0.1);
        yesBtn.style.transform = `scale(${scaleFactor})`;

        yesBtn.classList.add('animate-pulse');
        setTimeout(() => yesBtn.classList.remove('animate-pulse'), 600);

        if (noClickCount >= maxNoClicks) {
            yesBtn.textContent = "অবশ্যই হ্যাঁ! ❤️";
            yesBtn.classList.add('yes-fullscreen');
            noBtn.classList.add('hidden');
            noMessageDisplay.classList.add('hidden');
        }
    });

    yesBtn.addEventListener('click', (event) => {
        createClickParticles(event, '#32CD32'); // সবুজ কালার
        createFlowerRain(); // ফুল ঝরার অ্যানিমেশন শুরু
        showScreen(finalMessageScreen);
    });
});

// --- Flower and Heart Particle Animation for background ( আগের মতই ) ---
function createParticle(container, type) {
    const particle = document.createElement('div');
    particle.classList.add(type === 'flower' ? 'flower-petal' : 'heart-particle');
    container.appendChild(particle);

    const size = Math.random() * 20 + 10;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    const startX = Math.random() * window.innerWidth;
    particle.style.left = `${startX}px`;
    particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
    particle.style.animationDelay = `-${Math.random() * 10}s`;

    if (type === 'heart') {
        particle.style.backgroundColor = `hsl(${Math.random() * 30 + 330}, 80%, 70%)`;
        particle.style.boxShadow = `0 0 ${size/3}px hsl(${Math.random() * 30 + 330}, 80%, 70%)`;
    } else {
        particle.style.backgroundColor = `hsl(${Math.random() * 60 + 300}, 90%, 80%)`;
        particle.style.boxShadow = `0 0 ${size/4}px hsl(${Math.random() * 60 + 300}, 90%, 80%)`;
    }

    particle.addEventListener('animationend', () => {
        particle.remove();
    });
}

const flowersContainer = document.querySelector('.flowers-animation');
const heartsContainer = document.querySelector('.hearts-animation');

if (flowersContainer && heartsContainer) { // কন্টেইনার আছে কিনা চেক করা হয়েছে
    setInterval(() => {
        createParticle(flowersContainer, 'flower');
        createParticle(heartsContainer, 'heart');
    }, 300);
}
