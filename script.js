const buttonBlock = document.getElementById("buttonBlock");
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const yesMessage = document.getElementById("yesMessage");
const noMessage = document.getElementById("noMessage");
const yesHoverMessage = document.getElementById("yesHoverMessage");

let noDodging = true;      // NO button dodges for 40 seconds
let yesMoving = true;      // YES moves on hover for 20 seconds

/* Move button inside container */
function moveButton(btn) {
  const maxX = buttonBlock.clientWidth - btn.offsetWidth;
  const maxY = buttonBlock.clientHeight - btn.offsetHeight;

  btn.style.left = Math.random() * maxX + "px";
  btn.style.top = Math.random() * maxY + "px";
}

/* YES button hover */
yesBtn.addEventListener("mouseover", () => {
  if (yesMoving) moveButton(yesBtn); // only move for first 20s
  yesHoverMessage.style.display = "block"; // show hover message
});

yesBtn.addEventListener("mouseout", () => {
  yesHoverMessage.style.display = "none"; // hide message
});

/* NO button hover */
noBtn.addEventListener("mouseover", () => {
  if (noDodging) {
    moveButton(noBtn);
  }
});

/* YES click */
yesBtn.addEventListener("click", () => {
  buttonBlock.style.display = "none";
  yesMessage.style.display = "block";
});

/* NO click */
noBtn.addEventListener("click", () => {
  buttonBlock.style.display = "none";
  noMessage.style.display = "block";
});

/* Stop NO dodging after 40 seconds */
setTimeout(() => {
  noDodging = false;
}, 40000);

/* Stop YES moving after 20 seconds */
setTimeout(() => {
  yesMoving = false;
}, 20000);

/* Floating hearts */
const heartsContainer = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = 16 + Math.random() * 30 + "px";
  heart.style.animationDuration = 5 + Math.random() * 5 + "s";

  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 10000);
}

setInterval(createHeart, 400);
