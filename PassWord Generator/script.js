let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let UpperCase = document.getElementById("UpperCase");
let LowerCase = document.getElementById("LowerCase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");

// Code for Slider Value
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input", () => {
  sliderValue.textContent = inputSlider.value;
});

// Code for Generate Password
genBtn.addEventListener("click", () => {
  passBox.value = generatePassword();
});

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*";

function generatePassword() {
  let genPassword = "";
  let allChars = "";

  allChars += LowerCase.checked ? lowerChars : "";
  allChars += UpperCase.checked ? upperChars : "";
  allChars += numbers.checked ? allNumbers : "";
  allChars += symbols.checked ? allSymbols : "";

  if (allChars == "" || allChars.length == 0) {
    return genPassword;
  }

  let i = 1;
  while (i <= inputSlider.value) {
    genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
    i++;
  }

  return genPassword;
}

// Code for copy the code
copyIcon.addEventListener("click", () => {
  if (passBox.value != "" || passBox.value.length >= 1) {
    navigator.clipboard.writeText(passBox.value);
    copyIcon.innerText = "check";
    copyIcon.title = "Copied";

    setTimeout(() => {
      copyIcon.innerHTML = "content_copy";
      copyIcon.title = "";
    }, 3000);
  }
});
