let burger = document.getElementById('hamburger')
let navLinks = document.querySelector('.nav-links')
let cross = document.querySelector('.cross')
let comments = document.querySelectorAll('.clientComment')
let currentIndex = 0;

window.addEventListener('scroll', function () {
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    document.getElementById("nav").style.backgroundColor = "white";
    document.getElementById("nav").style.borderBottom = "none";
    document.querySelector('#hamburger').style.color = 'black'
    document.querySelector('#logo').style.color = 'black'
  } else {
    document.getElementById("nav").style.backgroundColor = "transparent";
    document.querySelector('#logo').style.color = 'white'
    document.querySelector('#hamburger').style.color = 'white'
    document.getElementById("nav").style.borderBottom = "1px solid grey";
  }
})



function move(x) {
  currentIndex = currentIndex + x
  init(currentIndex)
}


function init(index) {
  comments = Array.from(comments)

  if (currentIndex >= comments.length) {
    index = 0
    currentIndex = 0
  }
  if (currentIndex < 0) {
    index = comments.length - 1
    currentIndex = comments.length - 1
  }

  for (let i = 0; i < comments.length; i++) {
    comments[i].style.display = "none"
  }

  comments[index].style.display = "block"
  comments[index].style.opacity = "1"
}

init(currentIndex)


burger.addEventListener('click', function () {

  let dropdownLinks = document.querySelector('.dropdown-links')

  
  dropdownLinks.classList.toggle('toggler')

  let isOpen = dropdownLinks.classList.contains('toggler')

  if(!isOpen){
      dropdownLinks.style.borderTop = 'none'
  }
  else{
    dropdownLinks.style.borderTop = '4px solid #00BFFF'
  }

})  




function showSlide(index) {
  const slider = document.querySelector('.cards');
  const slideWidth = document.querySelector('.card').offsetWidth;
  const maxIndex = slider.children.length - 1;

  if (index < 0) {
    index = 0;
  } else if (index > maxIndex) {
    index = maxIndex;
  }

  slider.style.transform = `translateX(${-index * slideWidth}px)`;
  currentIndex = index;
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

// Initialize slider
showSlide(currentIndex);
