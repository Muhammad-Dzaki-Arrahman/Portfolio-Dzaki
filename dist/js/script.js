// Fixed Navbar
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const namaku = document.querySelector("#namaku");
  const warnalist = document.querySelector("li");

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
    namaku.classList.add("warna-nama");
    warnalist.classList.add("list-warna");
  } else {
    header.classList.remove("navbar-fixed");
    namaku.classList.remove("warna-nama");
    warnalist.classList.remove("list-warna");
  }
};

// Hamberger navbar
const hamberger = document.querySelector("#hamberger");
const navmenu = document.querySelector("#nav-menu");

hamberger.addEventListener("click", function () {
  hamberger.classList.toggle("hamberger-active");
  navmenu.classList.toggle("hidden");
});
