const burgerBtn = document.querySelector(".burger-btn");
const navigation = document.querySelector("nav .navigation");
const links = document.querySelectorAll("ul li a");
const forNav = document.querySelector(".for-nav");
// burger button click
burgerBtn.addEventListener("click", () => {
   // navigation slide
   navigation.classList.toggle("slide");
   // container slide
   forNav.classList.toggle("push");
});
// scroll smooth
for (const link of links) {
   link.addEventListener("click", function (e) {
      e.preventDefault();
      const href = this.getAttribute("href");
      const offsetTop = document.querySelector(href).offsetTop - 90;

      scroll({
         top: offsetTop,
         behavior: "smooth",
      });
   });
}
