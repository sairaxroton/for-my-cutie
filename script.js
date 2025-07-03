document.addEventListener('DOMContentLoaded', () => {
    const initialScreen = document.getElementById('initialScreen');
    const goAheadBtn = document.getElementById('goAheadBtn');
    const questionScreen = document.getElementById('questionScreen');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const finalMessageScreen = document.getElementById('finalMessageScreen');
    const noMessageDisplay = document.getElementById('noMessageDisplay');

    let noClickCount = 0;
    const maxNoClicks = 10;

    const funnyMessages = [
        "এইটা নিশ্চয় ভুল করে ক্লিক করছো! 😜",
        "আবার চলো ট্রাই করি? 🤭",
        "বউ রাগ করে না! বলো না ভালোবাসো? 🥺",
        "তুমি আমার প্রেম, ভুলে গেছো নাকি? 😌",
        "মনটা কেমন জানি কষ্ট পেলো... 😢",
        "তুমি কি জানো না তুমি আমার সব কিছু? 🥹",
        "এইটা কি তোমার ফাইনাল উত্তর? 😰",
        "না মানে, তুমি না আমার জান! 😭",
        "আরেকবার চিন্তা করো প্লিজ... 😔",
        "তোমাকে না পেলে আমি পাগল হয়ে যাবো! 😩"
    ];

    function showScreen(screenToShow) {
        [initialScreen, questionScreen, finalMessageScreen].forEach(screen => {
            screen.classList.add('hidden');
            screen.classList.remove('flex');
        });
        screenToShow.classList.remove('hidden');
        screenToShow.classList.add('flex');
    }

    showScreen(initialScreen);

    goAheadBtn.addEventListener('click', () => {
        showScreen(questionScreen);
    });

    noBtn.addEventListener('click', () => {
        noClickCount++;

        const messageIndex = Math.min(noClickCount - 1, funnyMessages.length - 1);
        noMessageDisplay.textContent = funnyMessages[messageIndex];
        noMessageDisplay.classList.remove('hidden', 'animate-fade-in');
        void noMessageDisplay.offsetWidth;
        noMessageDisplay.classList.add('animate-fade-in');

        // Button grows
        const scaleFactor = 1 + (noClickCount * 0.1);
        yesBtn.style.transform = `scale(${scaleFactor})`;

        // Button shakes slightly to grab attention
        yesBtn.classList.add('animate-bounce');
        setTimeout(() => yesBtn.classList.remove('animate-bounce'), 600);

        // Final transformation
        if (noClickCount >= maxNoClicks) {
            yesBtn.textContent = "YES! 😍";
            yesBtn.classList.add('w-full', 'h-40', 'text-5xl', 'bg-pink-500');
            noBtn.classList.add('hidden');
            noMessageDisplay.classList.add('hidden');
        }
    });

    yesBtn.addEventListener('click', () => {
        showScreen(finalMessageScreen);
    });
});