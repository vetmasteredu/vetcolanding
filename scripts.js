document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide img');
    const slideWidth = slides[0].clientWidth;
    let currentIndex = 0;

    function startCarousel() {
        setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            carouselContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }, 7000); // 7 segundos
    }

    startCarousel();
});
