let searchBtn = document.querySelector(".searchbtn");
let exit = document.querySelector(".close");
let searchBox = document.querySelector(".search");
let overlay = document.querySelector(".overlay");
let signup = document.querySelector(".signing");
let user = document.querySelector(".user");
searchBtn.onclick = function () {
  searchBox.classList.add("active");
};
exit.onclick = function () {
  searchBox.classList.remove("active");
};
user.onclick = function () {
  overlay.classList.add("block");
  signup.classList.add("block");
};

document.querySelector(".exitbtn").onclick = function () {
  overlay.classList.remove("block");
  signup.classList.remove("block");
};

let ballcontrol = document.querySelectorAll(".video-btn");
let video = document.getElementById("video-slider");
ballcontrol.forEach((item) => {
  item.addEventListener("click", function () {
    item.parentElement
      .getElementsByClassName("active")[0]
      .classList.remove("active");
    item.classList.add("active");
    video.src = item.dataset.src;
  });
});
let bars = document.querySelector(".bars");
let links = document.querySelector(".header .container .links");
bars.onclick = function () {
  links.classList.toggle("block");
};

const swiper = new Swiper(".Review", {
  // Optional parameters
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
