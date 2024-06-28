// play progress
document.addEventListener('DOMContentLoaded', () => {
    let sliderElement = document.querySelector('.uk-slider');
    let slider = UIkit.slider(sliderElement);

    let progressBar = document.querySelector('.progress-bar');
    sliderElement.addEventListener('itemshown', function () {
        let currentIndex = slider.index;
        let totalSlides = slider.slides.length;
        let progress = ((currentIndex + 1) / totalSlides) * 100;

        progressBar.style.width = `${progress}%`;
    });
});

// Control buttons right and left
document.addEventListener('DOMContentLoaded', function () {
    var sliderElement = document.querySelector('.uk-slider');
    var slider = UIkit.slider(sliderElement);

    var progressBar = document.querySelector('.progress-bar');

    document.querySelector('.left').addEventListener('click', function (e) {
        e.preventDefault();
        slider.show(slider.index + 1);
    });

    document.querySelector('.right').addEventListener('click', function (e) {
        e.preventDefault();
        slider.show(slider.index - 1);
    });

    sliderElement.addEventListener('itemshown', function () {
        var currentIndex = slider.index;
        var totalSlides = slider.slides.length;
        var progress = ((currentIndex + 1) / totalSlides) * 100;
        progressBar.style.width = progress + '%';
    });
});