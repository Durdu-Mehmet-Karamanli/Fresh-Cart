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


const dropDownsList = document.querySelectorAll("[dropdown]");
dropDownsList.forEach((dropdown) => {
  dropdown.addEventListener('click', () => {
    const drContent = dropdown.querySelector('.dropdowns-content');
    dropDownsList.forEach((ahmet) => {
      const content = ahmet.querySelector('.dropdowns-content');
        if (drContent !== content) {
          content.style.display = "none";
        }
    })
    if (drContent.style.display === "block") {
      drContent.style.display = "none";
    } else {
      drContent.style.display = "block";
    }
    event.stopPropagation();
  })
})


const subDownsList = document.querySelectorAll("[subdropdown]");
subDownsList.forEach((subDowns) => {
  subDowns.addEventListener('click', () => {
    const subdrContent = subDowns.querySelector('.subdropdowns-content');
    subDownsList.forEach((selim) => {
      const subcontent = selim.querySelector('.subdropdowns-content');
        if (subdrContent !== subcontent) {
          subcontent.style.display = "none";
        }
    })
    if (subdrContent.style.display === "block") {
      subdrContent.style.display = "none";
    } else {
      subdrContent.style.display = "block";
    }
    event.stopPropagation();
  })
})


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(function(navLink) {
  navLink.addEventListener('click', function(event) {
    navLinks.forEach(function(link) {
      link.classList.remove('active');
    });
    event.target.classList.add('active');
  });
});
var swiper2 = new Swiper(".newswpier", {
  slidesPerView: 4,
      spaceBetween: 30,
      freeMode: true, 
  /*autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },*/ 
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});