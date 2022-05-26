const toggleButton = document.querySelector(".fa-solid");
const hiddenMenu = document.querySelector(".menu-container");

toggleButton.addEventListener("click", function () {
    hiddenMenu.classList.toggle("shown");
  });