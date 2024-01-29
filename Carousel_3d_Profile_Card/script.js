
document.addEventListener("DOMContentLoaded", function() {
    const carouselBtn = document.querySelectorAll("[data-carouselBtn]");

    carouselBtn.forEach(button => {
        button.addEventListener('click', () => {
            const offset = button.dataset.carouselbtn === "next" ? 1 : -1;
            const slides = button.closest("[data-carousel]").querySelector("[data-slides]");

            const activeSlide = slides.querySelector("[data-active]");
            let newIndex = [...slides.children].indexOf(activeSlide) + offset;
            if (newIndex < 0) newIndex = slides.children.length - 1;
            if (newIndex >= slides.children.length) newIndex = 0;

            slides.children[newIndex].dataset.active = true;
            delete activeSlide.dataset.active;
        });
    });
});



const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    const cardChild = card.querySelector('.cardBorder'); 
    cardChild.addEventListener("mousemove", e => {
        let elRect = card.getBoundingClientRect();

        let x = e.clientX - elRect.x;
        let y = e.clientY - elRect.y;

        let midCardWidth = elRect.width / 2;
        let midCardHeight = elRect.height / 2;

        let angleY = -(x - midCardWidth) / 6;
        let angleX = -(y - midCardHeight) / 6;

        cardChild.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1,1)`;
        
    });

    cardChild.addEventListener('mouseleave', () => {
        cardChild.style.transform = "rotateX(0) rotateY(0) scale(1,1)";
    });
});
