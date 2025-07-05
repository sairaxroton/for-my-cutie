document.addEventListener('mousemove', (e) => {
    movePupils(e.clientX, e.clientY);
});

document.addEventListener('touchmove', (e) => {
    // Prevent default touch behavior (like scrolling)
    e.preventDefault();
    // Use the first touch point for movement
    if (e.touches.length > 0) {
        movePupils(e.touches[0].clientX, e.touches[0].clientY);
    }
}, { passive: false }); // passive: false to allow preventDefault

function movePupils(mouseX, mouseY) {
    const eyes = document.querySelectorAll('.eye');

    eyes.forEach(eye => {
        const eyeRect = eye.getBoundingClientRect();
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;

        // Calculate the angle between the eye center and the mouse/touch position
        const angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);

        // Calculate the maximum movement distance for the pupil
        // This keeps the pupil within the eye
        const maxPupilMoveDistance = (eyeRect.width / 2) - (eye.querySelector('.pupil').offsetWidth / 2);

        // Calculate the new position for the pupil based on the angle and max distance
        const pupilX = Math.cos(angle) * maxPupilMoveDistance;
        const pupilY = Math.sin(angle) * maxPupilMoveDistance;

        eye.querySelector('.pupil').style.transform = `translate(${pupilX}px, ${pupilY}px)`;
    });
}
