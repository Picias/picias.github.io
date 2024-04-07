document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(n) {
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        slides[n].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 5000);

    showSlide(currentSlide);
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollTop = window.scrollY;

    if (scrollTop > 50) { // Jeśli przewinięcie jest większe niż 50px
        header.style.backgroundColor = 'rgba(255,255,255,0.7)'; // Zmiana koloru tła nagłówka
    } else {
        header.style.backgroundColor = 'rgba(255,255,255,0)'; // Powrót do oryginalnego koloru tła nagłówka
    }
});

document.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        var menuItems = document.querySelectorAll('.menu a');

        menuItems.forEach(function(item) {
            item.style.color = '#000'; // Ustawienie koloru tekstu na czarny
        });
    } else {
        var menuItems = document.querySelectorAll('.menu a');

        menuItems.forEach(function(item) {
            item.style.color = '#fff'; // Ustawienie koloru tekstu na biały
        });
    }
});

document.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        var menuUnderlines = document.querySelectorAll('.menu a');

        menuUnderlines.forEach(function(link) {
            link.classList.add('scrolled'); // Dodanie klasy 'scrolled' do linku
        });
    } else {
        var menuUnderlines = document.querySelectorAll('.menu a');

        menuUnderlines.forEach(function(link) {
            link.classList.remove('scrolled'); // Usunięcie klasy 'scrolled' z linku
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const galleryMenuItems = document.querySelectorAll('.gallery-menu-list li a');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const enlargedImage = document.querySelector('.enlarged-image');
    const enlargedImageContainer = document.querySelector('.enlarged-image-container');

    galleryMenuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');

            galleryMenuItems.forEach(item => item.classList.remove('active'));
            this.classList.add('active');

            galleryItems.forEach(item => {
                if (category === 'all' || item.classList.contains(category)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const highResImgSrc = img.getAttribute('data-high-res-src');

            enlargedImage.src = highResImgSrc || img.src;
            enlargedImageContainer.style.display = 'block';
        });
    });

    enlargedImageContainer.addEventListener('click', function() {
        this.style.display = 'none';
    });
});

