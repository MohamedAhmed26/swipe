// document.addEventListener('DOMContentLoaded', function() {
//     let sliderElement = document.querySelector('.uk-slider');
//     let slider = UIkit.slider(sliderElement);

//     let progressBar = document.querySelector('.progress-bar');

//     function updateProgressBar() {
//         let currentIndex = slider.index;
//         let totalSlides = slider.slides.length;
//         let progress = ((currentIndex + 1) / totalSlides) * 100;
//         progressBar.style.width = `${progress}%`;
//     }

//     sliderElement.addEventListener('itemshown', function() {
//         updateProgressBar();
//     });

//     document.querySelector('.right').addEventListener('click', function(e) {
//         e.preventDefault();
//         slider.show(slider.index - 1); 
//     });

//     document.querySelector('.left').addEventListener('click', function(e) {
//         e.preventDefault();
//         slider.show(slider.index + 1);
//     });

//     slider = UIkit.slider(sliderElement, {
//         autoplay: {
//             delay: 1000, 
//             enabled: true,
//             pauseOnHover: false
//         }
//     });

//     sliderElement.addEventListener('itemshown', function() {
//         updateProgressBar();
//     });
// });
