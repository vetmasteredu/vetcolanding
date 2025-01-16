let currentIndex = 0;

function startCarousel() {
    const slides = document.querySelector('.carousel-container');
    const totalSlides = slides.children.length;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, 7000); // Cambia cada 7 segundos
}

document.addEventListener('DOMContentLoaded', startCarousel);
