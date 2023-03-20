/*get the number of characters*/
function charLength() {
  let charLength = document.getElementById("length").value;
  document.getElementById("result").innerHTML = charLength;
  return charLength;
}
document.getElementById("length").addEventListener("change", charLength);


// select all the inputs
const outputBox = document.querySelector("#password__result");
const copyPass = document.querySelector("#copyIcon");
const PassLength = document.querySelector("#length");
const upperCase = document.querySelector("#uppercase");
const lowerCase = document.querySelector("#lowercase");
const numbers = document.querySelector("#numbers");
const symbols = document.querySelector("#symbols");
const form = document.querySelector("#form");

//  copy password function

copyPass.addEventListener("click", async () => {
  const password = outputBox.value;
  if (password) {
    await navigator.clipboard.writeText(password);
    alert("password copied");
  } else {
    alert("There is no password to copy");
  }
});

// Create a function for random numbers

function generateRandomChar(min, max) {
  const limit = max - min + 1;
  return String.fromCharCode(Math.floor(Math.random() * limit) + min);
}

function uppercase() {
  return generateRandomChar(65, 90);
}

function lowercase() {
  return generateRandomChar(97, 122);
}

function number() {
  return generateRandomChar(48, 57);
}

function symbol() {
  const allsymbols = "!@#$%^&*()-=_+|/?><.,~`][";
  return allsymbols[Math.floor(Math.random() * allsymbols.length)];
}

// create array for all functions
const functionArray = [
  {
    element: upperCase,
    function: uppercase,
  },
  {
    element: lowerCase,
    function: lowercase,
  },
  {
    element: numbers,
    function: number,
  },
  {
    element: symbols,
    function: symbol,
  },
];

// create a function form

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const limit = PassLength.value;
  let generatedPassword = "";
  const funArray = functionArray.filter(({ element }) => element.checked);
  for (i = 0; i < limit; i++) {
    const index = Math.floor(Math.random() * funArray.length);
    const letter = funArray[index].function();
    generatedPassword += letter;
  }
  outputBox.value = generatedPassword;
});
