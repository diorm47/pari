// About us redirect
var second_view = document.querySelector(".second_view");
var scroll_to_second_view = document.querySelector(".scroll_to_second_view");
function scrollToSecondView() {
  second_view.scrollIntoView({ behavior: "smooth" });
}
scroll_to_second_view.addEventListener("click", scrollToSecondView);

// Data Team redirect
var team_block = document.querySelector(".team_block");
var scroll_to_team_block = document.querySelector(".scroll_to_team_block");
function scrollToTeamBlock() {
  team_block.scrollIntoView({ behavior: "smooth" });
}
scroll_to_team_block.addEventListener("click", scrollToTeamBlock);

// Stack redirect
var tecnologies_block = document.querySelector(".tecnologies_block");
var scroll_to_tecnologies_block = document.querySelector(
  ".scroll_to_tecnologies_block"
);
function scrollToTecnologiesBlock() {
  tecnologies_block.scrollIntoView({ behavior: "smooth" });
}
scroll_to_tecnologies_block.addEventListener("click", scrollToTecnologiesBlock);

// Vacancy redirect
var vacancies_block = document.querySelector(".vacancies_block");
var scroll_to_vacancies_block = document.querySelector(
  ".scroll_to_vacancies_block"
);
function scrollToVacanciesBlock() {
  vacancies_block.scrollIntoView({ behavior: "smooth" });
}
scroll_to_vacancies_block.addEventListener("click", scrollToVacanciesBlock);

// File uplod
var input = document.getElementById("file-upload");
var infoArea = document.getElementById("file-upload-filename");
input.addEventListener("change", showFileName);
function showFileName(event) {
  var input = event.srcElement;
  var fileName = input.files[0].name;
  infoArea.textContent = "Выбранный файл: " + fileName;
}
// File uplod 2
var input2 = document.getElementById("file-upload-2");
var infoArea2 = document.getElementById("file-upload-filename-2");
input2.addEventListener("change", showFileName2);
function showFileName2(event) {
  var input = event.srcElement;
  var fileName = input.files[0].name;

  infoArea2.textContent = "Выбранный файл: " + fileName;
}

// Accordeon
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const targetId = this.getAttribute("data-target");
    const targetDiv = document.getElementById(targetId);
    if (targetDiv.classList.contains("open_accordeon")) {
      targetDiv.classList.remove("open_accordeon");
      targetDiv.classList.add("close_accordeon");
    } else {
      targetDiv.classList.remove("close_accordeon");
      targetDiv.classList.add("open_accordeon");
    }
  });
});

// Header toggler
const buttons2 = document.querySelectorAll(".header_togle_btn");
const header_togle_btn_2 = document.querySelectorAll(".btn-left");

buttons2.forEach((buttons2) => {
  buttons2.addEventListener("mouseover", function () {
    const targetId = this.getAttribute("data-target");
    const targetDiv = document.getElementById(targetId);
    targetDiv.classList.add("set_second");
  });
});
buttons2.forEach((buttons2) => {
  buttons2.addEventListener("mouseout", function () {
    const targetId = this.getAttribute("data-target");
    const targetDiv = document.getElementById(targetId);
    targetDiv.classList.remove("set_second");
  });
});

header_togle_btn_2.forEach((header_togle_btn_2) => {
  header_togle_btn_2.addEventListener("mouseout", function () {
    const targetId = this.getAttribute("data-target");
    const targetDiv = document.getElementById(targetId);
    targetDiv.classList.remove("set_first");
  });
});
header_togle_btn_2.forEach((header_togle_btn_2) => {
  header_togle_btn_2.addEventListener("mouseover", function () {
    const targetId = this.getAttribute("data-target");
    const targetDiv = document.getElementById(targetId);
    targetDiv.classList.add("set_first");
  });
});

// Mobile menu
function toggleMenu() {
  var element = document.querySelector(".navbar-nav");
  element.classList.toggle("mob_menu_wrapper");
}
