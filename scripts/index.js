// var digest = document.querySelector(".digest");
// var scroll_to_digest = document.querySelector(".scroll_to_digest");

// function scrollToDigest() {
//   digest.scrollIntoView({ behavior: "smooth" });
// }

// scroll_to_digest.addEventListener("click", scrollToDigest);



var input = document.getElementById("file-upload");
var infoArea = document.getElementById("file-upload-filename");
input.addEventListener("change", showFileName);
function showFileName(event) {
  var input = event.srcElement;
  var fileName = input.files[0].name;
  infoArea.textContent = "Выбранный файл: " + fileName;
}



var input2 = document.getElementById("file-upload-2");
var infoArea2 = document.getElementById("file-upload-filename-2");
input2.addEventListener("change", showFileName2);
function showFileName2(event) {
  var input = event.srcElement;
  var fileName = input.files[0].name;
  
  infoArea2.textContent = "Выбранный файл: " + fileName;
}
