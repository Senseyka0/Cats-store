const heartIcons = document.querySelectorAll(".cardBlock__img-heart");

heartIcons.forEach((icon) => {
   icon.addEventListener("click", (e) => {
      icon.classList.toggle("active");
   });
});
