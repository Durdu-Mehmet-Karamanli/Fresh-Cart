function modal(id){
    document.getElementById(id).classList.toggle('modal-active');
    window.onclick = function(event) {
    if (event.target == document.getElementById(id)) {
    document.getElementById(id).classList.remove('modal-active');
    }
}
}
function offCanvas(id){
    document.getElementById(id).classList.toggle('offCanvas-active');
    window.onclick = function(event) {
    if (event.target == document.getElementById(id)) {
    document.getElementById(id).classList.remove('offCanvas-active');
    }
}
}
function toggleDropdown(index) {
    var dropdown = document.getElementById(`dropdown-content-${index}`);
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "block";
    }
  }
  const buttons = document.querySelectorAll('input[type="button"]');
const inputField = document.querySelector('input[type="text"]');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const currentValue = parseInt(inputField.value);
    if (button.value === '-') {
      inputField.value = Math.max(currentValue - 1, 0);
    } else {
      inputField.value = currentValue + 1;
    }
  });
});