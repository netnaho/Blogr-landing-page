const chevron = document.querySelectorAll(".prod");
const hamMenu = document.querySelector(".ham-menu");
const mobNav = document.querySelector(".mob-nav");

hamMenu.addEventListener("click", function () {
  this.classList.toggle("active");
  mobNav.classList.toggle("hidden");
});
// window.addEventListener("click", function (e) {
//   if (e.target != hamMenu) {
//     mobNav.classList.add("hidden");
//     hamMenu.classList.toggle("active");
//   }
// });
for (i = 0; i < chevron.length; i++) {
  chevron[i].addEventListener("click", function (e) {
    this.classList.toggle("active");
    if (!this.nextElementSibling.classList.contains("fa-chevron-down")) {
      this.nextElementSibling.classList.add("fa-chevron-down");
      this.nextElementSibling.classList.remove("fa-chevron-up");
    } else {
      this.nextElementSibling.classList.add("fa-chevron-up");
      this.nextElementSibling.classList.remove("fa-chevron-down");
    }
    this.nextElementSibling.style.transition = "all 2s";
  });
}
