/* Colors */
const gray = "#edf2f7";
const green = "#68d391";

/* START : btn-circle-demo */
const btnCircle = document.getElementById("btn-circle-demo");
clickedbtnCircle = false;

const btnCircleInside = document.getElementById("btn-circle-inside-demo");

btnCircle.addEventListener("click", () => {
  clickedbtnCircle = !clickedbtnCircle;
  if (!clickedbtnCircle) {
    btnCircle.style.backgroundColor = gray;
    btnCircle.classList.remove("justify-end");
  } else {
    btnCircle.style.backgroundColor = green;
    btnCircle.classList.add("justify-end");
  }
});
/* END : btn-circle-demo */

/* START : input-uppercase-demo */

let inputUppercaseText = document.getElementById("input-uppercase-text-demo");

function getInputDemo() {
  let inputUppercase = document.getElementById("input-uppercase-demo").value;
  inputUppercaseText.innerHTML = inputUppercase.toUpperCase();
}

/* END : input-uppercase-demo */

/* START: menu-challenge-demo */

let menu = document.getElementById("menu-challenge-demo");
const submenu = document.getElementById("submenu-challenge-demo");
const chevron = document.getElementById("chevron-menu-demo");

let isMenuOpen = false;

menu.addEventListener("click", () => {
  if (!isMenuOpen) {
    submenu.classList.replace("hidden", "flex");
    chevron.classList.replace("fa-chevron-up", "fa-chevron-down");
    isMenuOpen = !isMenuOpen;
  } else {
    submenu.classList.replace("flex", "hidden");
    chevron.classList.replace("fa-chevron-down", "fa-chevron-up");
    isMenuOpen = !isMenuOpen;
  }
});

/* END: menu-challenge-demo */

/* START: Choice Selector */

let selector = document.querySelectorAll(".choice-demo");

for (i = 0; i < selector.length; i++) {
  selector[i].addEventListener("click", function () {
    if (this.classList.contains("border-2")) {
      this.classList.add("bg-purple-500");
      this.classList.remove("border-2");
    } else {
      this.classList.remove("bg-purple-500");
      this.classList.add("border-2");
    }
  });
}

/* END: Choise Selector */

/* START: Night Mode */

let nightMode = document.getElementById("night-mode-demo");
let nightModeEnabled = false;

nightMode.addEventListener("click", (e) => {
  e.preventDefault();
  if (!nightModeEnabled) {
    document.body.className += " bg-gray-900 text-white";
    nightModeEnabled = !nightModeEnabled;
  } else {
    document.body.classList.remove("bg-gray-900", "text-white");
    nightModeEnabled = !nightModeEnabled;
  }
});

/* END: Night Mode */

/* START: Audio Player */

let playing = true;

var audio = document.getElementById("audio");
audio.src =
  "https://idufq10zkt740l0mm1qrar5d-wpengine.netdna-ssl.com/wp-content/uploads/sites/60/2019/07/Aether-Umber.mp3";

document.getElementById("play-button-demo").addEventListener("click", () => {
  const playIcon = document.getElementById("play-demo");
  if (playing) {
    playIcon.classList.remove("fa-play");
    playIcon.classList.add("fa-pause");
    playing = !playing;
    audio.play();
  } else {
    playIcon.classList.add("fa-play");
    playIcon.classList.remove("fa-pause");
    playing = !playing;
    audio.pause();
  }
});

/* END: Audio Player */
