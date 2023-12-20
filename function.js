

/**
 * Adds a ripple effect to a button element.
 * 
 * @param {HTMLElement} button - The button element to which the ripple effect will be added.
 */
export function addRippleEffect(button) {
    button.addEventListener('mousedown', function(event) {
        let ripple = document.createElement("span");
        ripple.classList.add("ripple");

        this.appendChild(ripple);

        // Get the position of the button relative to the viewport
        let rect = this.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;

        // Set the position of the ripple element based on the mouse click
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        // Remove the ripple element after a short delay
        setTimeout(() => {
            ripple.remove();
        }, 400);
    });
}


