function modal(id){
    document.getElementById(id).classList.toggle('modal-active');
    let offbtn3 = document.getElementById('off3');
    offbtn3.addEventListener('click', function(event) {
      document.getElementById(id).classList.remove('modal-active');
    });
    let offbtn4 = document.getElementById('off4');
    offbtn4.addEventListener('click', function(event) {
      document.getElementById(id).classList.remove('modal-active');
    });
    window.onclick = function(event) {
    if (event.target == document.getElementById(id)) {
    document.getElementById(id).classList.remove('modal-active');
    }
}
}
   

function offCanvas(id){
    document.getElementById(id).classList.toggle('offCanvas-active');
    let offbtn = document.getElementById('off');
    offbtn.addEventListener('click', function(event) {
      document.getElementById(id).classList.remove('offCanvas-active');
    });
    let offbtn2 = document.getElementById('off2');
    offbtn2.addEventListener('click', function(event) {
      document.getElementById(id).classList.remove('offCanvas-active');
    });
    window.onclick = function(event) {
    if (event.target == document.getElementById(id)) {
    document.getElementById(id).classList.remove('offCanvas-active');
    }
}
}
function toggleDropdown(index) {
  var dropdowns = document.querySelectorAll('[id^="dropdown-content-"]');
  var currentDropdown = document.getElementById(`dropdown-content-${index}`);
  dropdowns.forEach((dropdown) => {
    if (dropdown!== currentDropdown) {
      dropdown.style.display = "none";
    }
  });
  if (currentDropdown.style.display === "block") {
    currentDropdown.style.display = "none";
  } else {
    currentDropdown.style.display = "block";
  }
}
  const decrementButtons = document.querySelectorAll('.decrement');
const incrementButtons = document.querySelectorAll('.increment');
const valueInputs = document.querySelectorAll('.value');

decrementButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        let currentValue = parseInt(valueInputs[index].value);
        if (currentValue > 0) {
            currentValue--;
            valueInputs[index].value = currentValue;
        }
    });
});

incrementButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        let currentValue = parseInt(valueInputs[index].value);
        currentValue++;
        valueInputs[index].value = currentValue;
    });
});