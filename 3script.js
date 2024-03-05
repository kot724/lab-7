document.addEventListener('DOMContentLoaded', function() {
    let images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Перелік зображень
    let currentImageIdx = 0; // Індекс поточного зображення

    const scr = document.getElementById('scr'); // Елемент, де буде показане зображення
    scr.style.backgroundImage = `url(${images[currentImageIdx]})`; // Встановлюємо початкове зображення

    function changeImage(next) {
        currentImageIdx += next ? 1 : -1; // Змінюємо індекс зображення

        // Перевірка на виход за межі масиву
        if (currentImageIdx < 0) currentImageIdx = images.length - 1;
        else if (currentImageIdx >= images.length) currentImageIdx = 0;

        // Встановлюємо наступне зображення
        scr.style.backgroundImage = `url(${images[currentImageIdx]})`;
    }

    document.querySelector('.left').addEventListener('click', function() { changeImage(false); });
    document.querySelector('.right').addEventListener('click', function() { changeImage(true); });
});
