function toggleMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const animatedElements = document.querySelectorAll('.animate__animated');
    const nethDiv = document.querySelector('.neth');
    const dogDiv = document.querySelector('.dog');

    const animateElementsInViewport = () => {
        animatedElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const viewHeight = window.innerHeight;
            if (elementPosition < viewHeight - 50) { // Adding an offset for smoother appearance
                element.classList.add('animate__fadeIn'); // Add the animation class
                element.classList.remove('hidden'); // Remove the hidden class
            }
        });
    };

    const animateSpecificDiv = (div) => {
        if (div) {
            const divPosition = div.getBoundingClientRect().top;
            const viewHeight = window.innerHeight;
            if (divPosition < viewHeight - 50) { // Adding an offset for smoother appearance
                const elements = div.querySelectorAll('.animate__animated');
                elements.forEach(element => {
                    element.classList.add('animate__fadeIn'); // Add the animation class
                    element.classList.remove('hidden'); // Remove the hidden class
                });
            }
        }
    };

    window.addEventListener('scroll', () => {
        animateElementsInViewport();
        animateSpecificDiv(nethDiv);
        animateSpecificDiv(dogDiv);
    });

    // Trigger animations on load if elements are already in view
    animateElementsInViewport();
    animateSpecificDiv(nethDiv);
    animateSpecificDiv(dogDiv);
});

function toggleMenu() {
    const nav = document.getElementById('myTopnav');
    if (nav.className === 'topnav') {
        nav.className += ' responsive';
    } else {
        nav.className = 'topnav';
    }
}
