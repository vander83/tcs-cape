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