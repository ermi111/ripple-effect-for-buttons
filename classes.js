/**
 * RippleEffect is a utility class for adding a ripple effect to a button.
 */
export class RippleEffect {
    /**
     * Creates an instance of the RippleEffect.
     * 
     * @param {HTMLElement} button - The button element to add the ripple effect to.
     */
    constructor(button) {
        this.button = button;

        this.button.addEventListener('mousedown', this.handleMouseDown.bind(this));
    }

    /**
     * Handles the mousedown event to create a ripple effect on the button.
     * 
     * @param {Event} event - The mousedown event.
     */
    handleMouseDown(event) {
        const ripple = document.createElement("span");
        ripple.classList.add("ripple");

        this.button.appendChild(ripple);

        const rect = this.button.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        // Set the position of the ripple element based on the mouse click
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        // Remove the ripple element after a short delay
        setTimeout(() => {
            ripple.remove();
        }, 400);
    }
}
