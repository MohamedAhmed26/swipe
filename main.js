document.addEventListener('DOMContentLoaded', () => {
    let sliderElement = document.querySelector('.uk-slider');
    let slider = UIkit.slider(sliderElement);

    let progressBar = document.querySelector('.progress-bar');

    sliderElement.addEventListener('itemshown', function() {
        let currentIndex = slider.index;
        let totalSlides = slider.slides.length;
        let progress = ((currentIndex + 1) / totalSlides) * 100;

        progressBar.style.width = `${progress}%`;
    });
});
