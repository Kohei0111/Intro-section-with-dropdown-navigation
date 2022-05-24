const toggleButton = document.getElementsByClassName("toggle-button")[0];
const wrapLinks = document.getElementsByClassName("wrap-nav-links")[0];

const toggleButton2 = document.getElementsByClassName("toggle-button")[0];

toggleButton.addEventListener("click", () => {
  wrapLinks.classList.toggle("active");
});

toggleButton2.addEventListener("click", () => {
  toggleButton2.classList.toggle("active");
});

// dropdown
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("drop-open");
}

document.getElementById("myFunction").addEventListener("click", function () {
  myFunction();
});

function myFunctionX() {
  document.getElementById("myDropdown-2").classList.toggle("drop-open");
}
document.getElementById("myFunctionX").addEventListener("click", function () {
  myFunctionX();
});
