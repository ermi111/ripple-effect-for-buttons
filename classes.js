/**
 * @class
 * @classdesc
 * `RippleEffect` is a utility class for adding a ripple effect to a button.
 * 
 * @param {HTMLElement} element - The element to add the ripple effect to.
 * @param {Object} options - Additional options for customization.
 */
export class RippleEffect {

    constructor(element, options = {}) {
        this.element = element;
        this.options = {
            duration: options.duration || 400,
            eventType: options.eventType || 'mousedown',
            createRipple: options.createRipple || this.createDefaultRipple.bind(this),
        };

        this.element.addEventListener(this.options.eventType, this.handleEvent.bind(this));
    }

    /**
     * Handles the specified event to create a ripple effect.
     * 
     * @param {Event} event - The triggering event.
     */
    handleEvent(event) {
        const ripple = this.options.createRipple();
        this.element.appendChild(ripple);

        const rect = this.element.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        setTimeout(() => {
            ripple.remove();
        }, this.options.duration);
    }

    /**
     * Creates the default ripple element.
     * Users can override this method for custom ripple creation.
     * 
     * @returns {HTMLElement} - The default ripple element.
     */
    createDefaultRipple() {
        const ripple = document.createElement("span");
        ripple.classList.add("ripple");
        return ripple;
    }
}
