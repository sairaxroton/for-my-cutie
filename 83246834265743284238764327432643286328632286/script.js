document.addEventListener('DOMContentLoaded', () => {
    const initialScreen = document.getElementById('initialScreen');
    const goAheadBtn = document.getElementById('goAheadBtn');
    const questionScreen = document.getElementById('questionScreen');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const finalMessageScreen = document.getElementById('finalMessageScreen');
    const noMessageDisplay = document.getElementById('noMessageDisplay'); // New element for messages

    let noClickCount = 0;
    const maxNoClicks = 10; // "No" button growth in 10 steps

    // Array of funny messages for "No" clicks
    const funnyMessages = [
        "I think you clicked this by mistake, try again! 😉",
        "Oops! Did your finger slip? 🤔",
        "Are you sure about that? 😉",
        "Come on, you know the right answer! 😊",
        "My heart says you meant 'Yes'! ❤️",
        "Let's try that again, shall we? 😉",
        "Don't make me sad! 🥺",
        "You're just playing hard to get, aren't you? 😉",
        "One more chance to say 'Yes'! 😊",
        "I'm pretty sure you love me! 🥰"
    ];

    // Function to show a screen and hide others
    function showScreen(screenToShow) {
        initialScreen.classList.add('hidden');
        questionScreen.classList.add('hidden');
        finalMessageScreen.classList.add('hidden');

        screenToShow.classList.remove('hidden');
        screenToShow.classList.add('flex'); // Ensure it's displayed as flex for centering
    }

    // Initial state: show only the "Go Ahead" button
    showScreen(initialScreen);

    // Event listener for "Go Ahead" button
    goAheadBtn.addEventListener('click', () => {
        showScreen(questionScreen);
    });

    // Event listener for "No" button
    noBtn.addEventListener('click', () => {
        noClickCount++;

        // Display a funny message
        const messageIndex = Math.min(noClickCount - 1, funnyMessages.length - 1); // Cycle through messages
        noMessageDisplay.textContent = funnyMessages[messageIndex];
        noMessageDisplay.classList.remove('hidden');
        noMessageDisplay.classList.remove('animate-fade-in'); // Reset animation
        void noMessageDisplay.offsetWidth; // Trigger reflow to restart animation
        noMessageDisplay.classList.add('animate-fade-in');

        // Calculate scale for Yes button based on noClickCount
        const scaleFactor = 1 + (noClickCount * 0.1); // Increase by 0.1 for each click (10 steps)
        yesBtn.style.transform = `scale(${scaleFactor})`;

        if (noClickCount >= maxNoClicks) {
            // After maxNoClicks, make the Yes button fullscreen
            yesBtn.classList.add('yes-fullscreen');
            noBtn.classList.add('hidden'); // Hide the No button once Yes is fullscreen
            yesBtn.textContent = "YES!"; // Make the text more emphatic
            noMessageDisplay.classList.add('hidden'); // Hide the funny message
        }
    });

    // Event listener for "Yes" button
    yesBtn.addEventListener('click', () => {
        showScreen(finalMessageScreen);
    });
});
