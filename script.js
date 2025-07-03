document.addEventListener('DOMContentLoaded', () => {
    const initialScreen = document.getElementById('initialScreen');
    const goAheadBtn = document.getElementById('goAheadBtn');
    const questionScreen = document.getElementById('questionScreen');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const finalMessageScreen = document.getElementById('finalMessageScreen');
    const noMessageDisplay = document.getElementById('noMessageDisplay'); // 'না' ক্লিক করলে মেসেজ দেখানোর জন্য

    let noClickCount = 0;
    const maxNoClicks = 12; // 'না' ক্লিকের সংখ্যা বাড়ানো হলো

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
        // সব স্ক্রিন লুকান এবং তাদের 'flex' ক্লাস সরান
        [initialScreen, questionScreen, finalMessageScreen].forEach(screen => {
            screen.classList.add('hidden');
            screen.classList.remove('flex');
            // যদি কোনো অ্যানিমেশন ক্লাস থাকে, সেগুলো সরিয়ে দিন যাতে পরেরবার ঠিকঠাক কাজ করে
            screen.classList.remove('animate-fade-in', 'animate-fade-in-delay');
        });

        // নির্দিষ্ট স্ক্রিনটি দেখান এবং 'flex' ক্লাস যুক্ত করুন
        screenToShow.classList.remove('hidden');
        screenToShow.classList.add('flex');
        screenToShow.classList.add('animate-fade-in'); // ফেড-ইন অ্যানিমেশন যুক্ত করুন
    }

    // প্রাথমিক স্ক্রিন দেখানো
    showScreen(initialScreen);

    // 'এগিয়ে যান' বাটনে ক্লিক ইভেন্ট
    goAheadBtn.addEventListener('click', () => {
        showScreen(questionScreen);
    });

    // 'না' বাটনে ক্লিক ইভেন্ট
    noBtn.addEventListener('click', () => {
        noClickCount++;

        // মেসেজ দেখানোর লজিক
        const messageIndex = Math.min(noClickCount - 1, romanticMessages.length - 1);
        noMessageDisplay.textContent = romanticMessages[messageIndex];
        noMessageDisplay.classList.remove('hidden'); // মেসেজ দেখান
        noMessageDisplay.classList.remove('animate-fade-in'); // পুরোনো এনিমেশন সরাও
        void noMessageDisplay.offsetWidth; // রিফ্লো ট্রিগার করার জন্য
        noMessageDisplay.classList.add('animate-fade-in'); // নতুন ফেড-ইন এনিমেশন

        // 'হ্যাঁ' বাটনের আকার বৃদ্ধি
        const scaleFactor = 1 + (noClickCount * 0.1);
        yesBtn.style.transform = `scale(${scaleFactor})`;

        // 'হ্যাঁ' বাটনকে একটু নড়াচড়া করানো
        yesBtn.classList.add('animate-pulse'); // আপনার CSS থেকে pulse অ্যানিমেশন ব্যবহার করুন
        setTimeout(() => yesBtn.classList.remove('animate-pulse'), 600); // অ্যানিমেশন সময়

        // চূড়ান্ত পরিবর্তন যখন 'না' ক্লিকের সর্বোচ্চ সীমায় পৌঁছাবে
        if (noClickCount >= maxNoClicks) {
            yesBtn.textContent = "অবশ্যই হ্যাঁ! ❤️"; // টেক্সট পরিবর্তন
            // এখানে আপনার HTML/CSS এ সংজ্ঞায়িত `yes-fullscreen` ক্লাস ব্যবহার করুন
            yesBtn.classList.add('yes-fullscreen');
            noBtn.classList.add('hidden'); // 'না' বাটন লুকিয়ে ফেলা
            noMessageDisplay.classList.add('hidden'); // মেসেজটিও লুকিয়ে ফেলা
        }
    });

    // 'হ্যাঁ' বাটনে ক্লিক ইভেন্ট
    yesBtn.addEventListener('click', () => {
        showScreen(finalMessageScreen);
    });
});
// --- Flower and Heart Particle Animation ---
function createParticle(container, type) {
    const particle = document.createElement('div');
    particle.classList.add(type === 'flower' ? 'flower-petal' : 'heart-particle');
    container.appendChild(particle);

    const size = Math.random() * 20 + 10; // 10px to 30px
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    const startX = Math.random() * window.innerWidth;
    particle.style.left = `${startX}px`;
    particle.style.animationDuration = `${Math.random() * 10 + 10}s`; // 10s to 20s
    particle.style.animationDelay = `-${Math.random() * 10}s`; // Stagger animation start

    if (type === 'heart') {
        particle.style.backgroundColor = `hsl(${Math.random() * 30 + 330}, 80%, 70%)`; // Shades of pink/red
        particle.style.boxShadow = `0 0 ${size/3}px hsl(${Math.random() * 30 + 330}, 80%, 70%)`;
        // For the heart shape, adjust ::before and ::after as well if using JS for styles
        // Or ensure they inherit from parent's background-color
    } else {
        particle.style.backgroundColor = `hsl(${Math.random() * 60 + 300}, 90%, 80%)`; // Shades of pink/purple
        particle.style.boxShadow = `0 0 ${size/4}px hsl(${Math.random() * 60 + 300}, 90%, 80%)`;
    }

    // Remove particle after animation ends to prevent DOM bloat
    particle.addEventListener('animationend', () => {
        particle.remove();
    });
}

const flowersContainer = document.querySelector('.flowers-animation');
const heartsContainer = document.querySelector('.hearts-animation');

// Generate a continuous stream of particles
setInterval(() => {
    if (flowersContainer) createParticle(flowersContainer, 'flower');
    if (heartsContainer) createParticle(heartsContainer, 'heart');
}, 300); // Every 300ms, a new flower and heart appears
