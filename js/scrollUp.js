const scrollUp = document.querySelector(".scroll-up");

window.addEventListener("scroll", trackScroll);
scrollUp.addEventListener("click", backToTop);

function trackScroll() {
   let scrolled = window.pageYOffset;
   let coords = document.documentElement.clientHeight;

   if (scrolled > coords) {
      scrollUp.classList.add("scroll-up-show");
   }
   if (scrolled < coords) {
      scrollUp.classList.remove("scroll-up-show");
   }
}

function backToTop() {
   if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 12);
   }
}
