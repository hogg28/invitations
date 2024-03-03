document.addEventListener('DOMContentLoaded', function() {
    // Place your JavaScript code here
    const wrapper = document.querySelector('.wrapper');
    const lids = document.querySelectorAll('.lid');
    const envelope = document.querySelector('.envelope');
    const waxSeal = document.querySelector('.wax-seal');
    const letter = document.querySelector('.letter');
    const horizontalRectangle = document.querySelector('.horizontal-rectangle');

    // Function to hide elements and rotate the rectangle
    function hideElementsAndRotate() {
        wrapper.style.opacity = '0';
        envelope.style.opacity = '0';
        waxSeal.style.opacity = '0';
        lids.forEach(lid => lid.style.opacity = '0');
        letter.style.opacity = '0';
        horizontalRectangle.style.transform = 'translate(-50%, -50%) rotate(90deg)';
    }

    // Event listener for mouse enter event on "You're Invited" text
    document.getElementById('detailsLetter').addEventListener('mouseenter', hideElementsAndRotate);

    // Keep track of the animation state
    let animationState = 'initial'; // Possible states: initial, envelopeHovered, detailsClicked

    // Function to add the "See details" text and "Back" text after the rectangle's rotation
    setTimeout(() => {
        const detailsContainer = document.getElementById('detailsContainer');

        const seeDetailsText = document.createElement('div');
        seeDetailsText.textContent = 'See details';
        seeDetailsText.classList.add('details-text');
        detailsContainer.appendChild(seeDetailsText);

        const backText = document.createElement('div');
        backText.textContent = 'Back';
        backText.classList.add('back-text');
        detailsContainer.appendChild(backText);

        // Attach event listener for "See details" text
        seeDetailsText.addEventListener('mouseenter', function() {
            // Change animation state
            animationState = 'detailsClicked';
            horizontalRectangle.style.transform = 'translate(-50%, -50%) rotate(90deg) rotateY(180deg)';
        });

        // Attach event listener for "Back" text
        backText.addEventListener('click', function() {
            // Reverse the animation based on the current state
            if (animationState === 'detailsClicked') {
                // Rotate back to the original position
                horizontalRectangle.style.transform = 'translate(-50%, -50%) rotate(90deg) rotateY(0deg)';
            }
            // Reset animation state and show original elements
            animationState = 'initial';
            wrapper.style.opacity = '1';
            envelope.style.opacity = '1';
            waxSeal.style.opacity = '1';
            lids.forEach(lid => lid.style.opacity = '1');
            letter.style.opacity = '1';
            horizontalRectangle.style.transform = 'translate(-50%, -50%) rotate(0deg)';
        });
    }, 5000); // Adjust the delay as needed
});
