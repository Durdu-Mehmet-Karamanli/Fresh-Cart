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
function toggleDropdown() {
    var dropdown = document.getElementById("dropdown-content");
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "block";
    }
  }