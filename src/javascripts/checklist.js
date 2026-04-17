import { startConfetti } from './confetti.js';

document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.checklist-checkbox__box');
    const numberDisplay = document.querySelector('.checklist-number');
    const counter = document.querySelector('.checklist-amount')

    if (numberDisplay) {
        numberDisplay.textContent = checkboxes.length;
    }

    checkboxes.forEach(box => {
        box.addEventListener('click', () => {
            box.classList.toggle('active');

            const amountActive = document.querySelectorAll('.active')
            counter.textContent = amountActive.length

            if (box.classList.contains('active')) {
                const rect = box.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                
                startConfetti(centerX, centerY);
            }
            
        });
    });
});

