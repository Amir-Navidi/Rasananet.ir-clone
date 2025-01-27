// adding active class to navlinks
let navLink = document.querySelectorAll(".nav-link");

navLink.forEach(navLink => {
  navLink.addEventListener("click", () => {
    document.querySelector(".nav-active")?.classList.remove("nav-active");
    navLink.classList.add("nav-active")
  });
});

// adding active class to sidebar navLinks
let sideBarLinks = document.querySelectorAll(".sidebar-link");

sideBarLinks.forEach(sideBarLinks => {
  sideBarLinks.addEventListener("click", () => {
    document.querySelector(".sidebar-link-active")?.classList.remove("sidebar-link-active");
    sideBarLinks.classList.add("sidebar-link-active")
  });
});

// shrinking navbar on scroll 
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    document.querySelector(".large-screen-nav").style.padding = "0";
    document.querySelector(".large-screen-nav").style.transition = "300ms";
    document.querySelector(".navbar-brand").style.width = "7.5rem"
  } else {
    document.querySelector(".large-screen-nav").style.padding = "25px 0px";
    document.querySelector(".navbar-brand").style.width = "8.5rem"
  }
};

// Comments slider 

var swiper = new Swiper(".comment-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is <= 550px
    550: {
      slidesPerView: 2,
    },
    // when window width is <= 1000px
    1000: {
      slidesPerView: 3,
    }
  }
});

// scrol to top button
var scrollTopBtn = document.querySelector(".scroll-to-top-button");

scrollTopBtn.addEventListener("click", () => {
  window.scroll({
    top: 0,
    behavior: "smooth"
  });
});

// show scroll to Top Btn when scroll down starterd 

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    scrollTopBtn.style.transform = "translateX(0%)";
  }
  else {
    scrollTopBtn.style.transform = "translateX(-500%)";
  }
});

// active sidebar login & signup button on click 

var accountLinkBtn = document.querySelector(".account-links-btn");
var accountLink = document.querySelectorAll(".sidebar-account-link");

accountLinkBtn.addEventListener("click", () => {
  accountLinkBtn.classList.toggle("active");

  if (accountLinkBtn.classList.contains("active")) {
    let reversedAccountLinks = Array.from(accountLink);
    // document.querySelector(".account-links-btn img").
    reversedAccountLinks.forEach((elem, index) => {
      let currentI = parseInt(elem.getAttribute("style").split(":")[1]);
      elem.setAttribute("style", "--i: " + (reversedAccountLinks.length + index) + ";");
      elem.classList.toggle("show");
    });
  } else {
    let reversedAccountLinks = Array.from(accountLink);

    reversedAccountLinks.forEach((elem, index) => {
      let currentI = parseInt(elem.getAttribute("style").split(":")[1]);
      elem.setAttribute("style", "--i: " + (reversedAccountLinks.length - index) + ";");
      elem.classList.toggle("show");
    });
  }
})

// lazy loading

const lazyLoad = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    const element = entry.target;
    if (entry.isIntersecting) {
      element.classList.add('show');
    }
  });
}, { threshold: 0.25 });

document.querySelectorAll('.lazy').forEach(element => {
  lazyLoad.observe(element);
});