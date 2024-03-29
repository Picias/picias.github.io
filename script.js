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
