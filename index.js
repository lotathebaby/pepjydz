const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextBtn = document.querySelector('.carousel-btn-right');
const prevBtn = document.querySelector('.carousel-btn-left');
const dotNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotNav.children);
const slideWidth = slides[0].getBoundingClientRect().width;
//  console.log(slides)

//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length)
//   {slideIndex = 1}
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className.replace("active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += "active";
//   setTimeout(showSlides, 2000);
  const setSlidePosition = (slide, index) => {
      slide.style.left = slideWidth * index + 'px';
  }
 slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

const hideShowArrows = (slides, prevBtn, nextBtn, targetIndex) => {
    if (targetIndex === 0) {
        prevBtn.classList.add('is-hidden');
        nextBtn.classList.remove('is-hidden');
    } else if (targetIndex === slides.length - 1) {
        prevBtn.classList.remove('is-hidden');
        nextBtn.classList.add('is-hidden');
    } else {
        prevBtn.classList.remove('is-hidden');
        nextBtn.classList.remove('is-hidden');
}
}
prevBtn.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevBtn, nextBtn, prevIndex);
})

 nextBtn.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);
    console.log(nextDot);
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevBtn, nextBtn, nextIndex);
})
dotNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');

    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotNav.querySelector('.current-slide');

    const targetIndex = dots.findIndex(dot => dot === targetDot)
    const targetSlide = slides[targetIndex];
    moveToSlide(track, currentSlide, targetSlide);

    updateDots(currentDot, targetDot);
    hideShowArrows(slides, prevBtn, nextBtn, targetIndex)
})

const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

 navToggle.addEventListener('click', () => {
     const visibility = primaryNav.getAttribute('data-visible')

     if (visibility === "false") {
         primaryNav.setAttribute("data-visible", true);
         navToggle.setAttribute('aria-expanded', true);
     } else if (visibility === "true") {
         primaryNav.setAttribute('data-visible', false);
         navToggle.setAttribute('aria-expanded', false);
     }
 })
// const hamburger = document.querySelector(".hamburger");
// hamburger.addEventListener("click", ()=> {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// })

// document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", ()=> {
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
// }))