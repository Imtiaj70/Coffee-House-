const menuOpenBtn = document.getElementById("menu-open-button");
const menuCloseBtn = document.getElementById("menu-close-button");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

// Create overlay
const overlay = document.createElement("div");
overlay.className = "mobile-overlay";
document.body.appendChild(overlay);

function openMenu() {
    navMenu.classList.add("active");
    overlay.style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeMenu() {
    navMenu.classList.remove("active");
    overlay.style.display = "none";
    document.body.style.overflow = "auto";
}

menuOpenBtn.addEventListener("click", openMenu);
menuCloseBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

navLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
});

// Escape key to close
document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && navMenu.classList.contains("active")) {
        closeMenu();
    }
});
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    }
  }
});