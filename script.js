document.addEventListener('DOMContentLoaded', () => {
    const initialScreen = document.getElementById('initialScreen');
    const goAheadBtn = document.getElementById('goAheadBtn');
    const questionScreen = document.getElementById('questionScreen');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const finalMessageScreen = document.getElementById('finalMessageScreen');
    const noMessageDisplay = document.getElementById('noMessageDisplay'); // 'না' ক্লিক করলে মেসেজ দেখানোর জন্য

    let noClickCount = 0;
    const maxNoClicks = 12; // 'না' ক্লিকের সংখ্যা একটু বাড়ানো হলো

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
            screen.classList.add('hidden', 'fade-out'); // ফেড-আউট এনিমেশন যোগ
            screen.classList.remove('flex', 'fade-in');
        });
        screenToShow.classList.remove('hidden', 'fade-out');
        screenToShow.classList.add('flex', 'fade-in'); // ফেড-ইন এনিমেশন যোগ
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

        // মেসেজ দেখানোর লজিক, শেষ মেসেজ পর্যন্ত পৌঁছালেও সেটিই দেখাবে
        const messageIndex = Math.min(noClickCount - 1, romanticMessages.length - 1);
        noMessageDisplay.textContent = romanticMessages[messageIndex];
        noMessageDisplay.classList.remove('hidden', 'animate-fade-in-out'); // পুরোনো এনিমেশন সরাও
        void noMessageDisplay.offsetWidth; // রিফ্লো ট্রিগার করার জন্য
        noMessageDisplay.classList.add('animate-fade-in-out'); // নতুন ফেড-ইন-আউট এনিমেশন

        // 'হ্যাঁ' বাটনের আকার বৃদ্ধি
        const scaleFactor = 1 + (noClickCount * 0.1);
        yesBtn.style.transform = `scale(${scaleFactor})`;

        // 'হ্যাঁ' বাটনকে একটু নড়াচড়া করানো (আরও আকর্ষণীয়)
        yesBtn.classList.add('animate-pulse-attention'); // নতুন এনিমেশন ক্লাস
        setTimeout(() => yesBtn.classList.remove('animate-pulse-attention'), 800); // এনিমেশন সময় বাড়ানো হলো

        // চূড়ান্ত পরিবর্তন যখন 'না' ক্লিকের সর্বোচ্চ সীমায় পৌঁছাবে
        if (noClickCount >= maxNoClicks) {
            yesBtn.textContent = "অবশ্যই হ্যাঁ! ❤️"; // টেক্সট পরিবর্তন
            yesBtn.classList.add('w-full', 'h-40', 'text-5xl', 'bg-gradient-to-r', 'from-pink-500', 'to-red-600', 'text-white', 'shadow-lg'); // আরও আকর্ষণীয় কালার ও শ্যাডো
            noBtn.classList.add('hidden'); // 'না' বাটন লুকিয়ে ফেলা
            noMessageDisplay.classList.add('hidden'); // মেসেজটিও লুকিয়ে ফেলা
        }
    });

    // 'হ্যাঁ' বাটনে ক্লিক ইভেন্ট
    yesBtn.addEventListener('click', () => {
        showScreen(finalMessageScreen);
    });
});
