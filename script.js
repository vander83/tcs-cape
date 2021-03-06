const menuButton = document.querySelector('.mobile-menu-button');
const mainMenu = document.querySelector('.main-menu');


function menuButtonText() {
  if (menuButton.innerHTML === "MENU") {
    menuButton.innerHTML = "EXIT";
  } else {
    menuButton.innerHTML = "MENU";
  }
}

function menuButtonClick() {
  mainMenu.classList.toggle('mobile-menu-display');
  menuButtonText();
}

menuButton.addEventListener('click', menuButtonClick);

const heroSection = document.querySelector('.hero');

const backgroundImages = [
  'url(img/steel-grid-roof.jpg)',  
  'url(img/fire-2.jpg)', 
  'url(img/flooring-1.jpg)',
  'url(img/inspection-1.jpg)'
];

const heroText = [
  `STEEL & CONCRETE<br>
  PROTECTION SPECIALISTS`,
  `FIRE-RETARDENT<br>
  INTUMESCENT COATINGS`,
  `SABS APPROVED<br>
  INDUSTRIAL FLOORING`,
  `NACE LEVEL 2<br>
  INSPECTION & CONSULTING`
];

const heroNextImage = [
  `img/fire-2.jpg`, 
  `img/flooring-1.jpg`,
  `img/inspection-1.jpg`,
  `img/steel-grid-roof.jpg`  
]

let i = 0;
document.querySelector('.hero').style.transition = 'all 1s ease';

function changeBackgroundImage() {
  i < (backgroundImages.length - 1) ? ++i : i = 0;
  document.querySelector('.hero').style.backgroundImage = backgroundImages[i];
  document.querySelector('.hero-text').innerHTML = heroText[i];  
  document.querySelector('.hero-next-image').src = heroNextImage[i];
}

setInterval(changeBackgroundImage, 3000);

