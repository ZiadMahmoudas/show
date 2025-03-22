let navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
    setTimeout(() => {
      link.classList.remove("active");
    }, 10000000);
  });
});

let navbarToggler = document.querySelector(".navbar-toggler");
let myBtnIcon = document.querySelector(".navbar-toggler i");
myBtnIcon.addEventListener("click", () => {
  myBtnIcon.classList.toggle("open");
  const isOpen = myBtnIcon.classList.contains("open");
  if (isOpen) {
    myBtnIcon.classList.replace("fa-bars", "bi-x");
  } else {
    myBtnIcon.classList.replace("bi-x", "fa-bars");
  }
});

