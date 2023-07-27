const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const droDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function () {
  droDownMenu.classList.toggle("open");
  const isOpen = droDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};
