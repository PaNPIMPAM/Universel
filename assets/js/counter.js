document.addEventListener("DOMContentLoaded", function() {
    const counterElement = document.getElementById('counter');
    const targetNumber = 4590;
    const duration = 2000; 
    const interval = 10; 
    const steps = targetNumber / (duration / interval);

    let currentNumber = 0;


    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }


    function startCounter() {
        if (isElementInViewport(counterElement)) {
            counterElement.classList.add('visible');

            const counterInterval = setInterval(() => {
                currentNumber += steps;
                if (currentNumber >= targetNumber) {
                    clearInterval(counterInterval);
                    currentNumber = targetNumber;
                }
                counterElement.textContent = Math.floor(currentNumber);
            }, interval);

           
            window.removeEventListener('scroll', startCounter);
        }
    }

    
    window.addEventListener('scroll', startCounter);
    startCounter(); 
});