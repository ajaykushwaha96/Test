const buttonBlock = document.getElementById("buttonBlock");
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const yesWarning = document.getElementById("yesWarning");
const yesMessage = document.getElementById("yesMessage");
const noMessage = document.getElementById("noMessage");

let yesUnlocked = false;
let noUnlocked = false;

// Function to randomly move button inside block
function moveButton(btn) {
  const maxX = buttonBlock.clientWidth - btn.offsetWidth;
  const maxY = buttonBlock.clientHeight - btn.offsetHeight;
  btn.style.left = Math.random() * maxX + "px";
  btn.style.top = Math.random() * maxY + "px";
}

// Hover on YES shows warning before unlock
yesBtn.addEventListener("mouseover", () => {
  if (!yesUnlocked) {
    moveButton(yesBtn);
    yesWarning.style.display = "block";
  }
});

// Unlock YES after 30 seconds
setTimeout(() => { 
  yesUnlocked = true; 
  yesWarning.style.display = "none"; 
}, 30000);

// Unlock NO after 90 seconds
setTimeout(() => { 
  noUnlocked = true; 
}, 90000);

// Click YES after unlock
yesBtn.addEventListener("click", () => {
  if (!yesUnlocked) return;
  buttonBlock.style.display = "none";
  yesWarning.style.display = "none";
  yesMessage.style.display = "block";
});

// Hover NO moves before unlock
noBtn.addEventListener("mouseover", () => {
  if (!noUnlocked) moveButton(noBtn);
});

// Click NO after unlock
noBtn.addEventListener("click", () => {
  if (!noUnlocked) return;
  buttonBlock.style.display = "none";
  noMessage.style.display = "block";
});
