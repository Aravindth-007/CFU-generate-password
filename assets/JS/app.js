/*get the number of characters*/
// function charLength() {

//         let charLength = document.getElementById('length').value;
//         document.getElementById('result').innerHTML = charLength;
//         return charLength;

// }

// document.getElementById('length').addEventListener('change', charLength);

const p_result = document.getElementById("password__result");
const char_length_result = document.getElementById("result");
const upper_result = document.getElementById("uppercase");
const lower_result = document.getElementById("lowercase");
const number_result = document.getElementById("numbers");
const symbol_result = document.getElementById("symbols");
const generate_result = document.getElementById("btn");

const allFunctions = {
  lower: giveRandomLower,
  upper: giveRandomUpper,
  number: giveRandomNumber,
  symbols: giveRandomSymbols,
};

generate_result.addEventListener("click", function (event) {
  event.preventDefault();

  const length = +char_length_result.value;
  const upper = upper_result.checked;
  const lower = lower_result.checked;
  const number = number_result.checked;
  const symbol = symbol_result.checked;

  p_result.innerText = generatePassword(length, upper, lower, number, symbol);
});

function generatePassword(length, upper, lower, number, symbol) {
  // remove unchecked types.
  // loop run for the length.

  let outcomePassword = "";

  const counts = upper + lower + number + symbol;
  const countsArray = [{ upper }, { lower }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );
  if (counts === 0) {
    return "";
  }

  for (let i = 0; i < length; i += counts) {
    countsArray.forEach((type) => {
      const nameoffunction = Object.keys;
      console.log("functionname", nameoffunction);
      type[0];
      generatePassword += randomfunc[nameoffunction]();
    });
  }
}

function giveRandomLower() {
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";

  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}

function giveRandomUpper() {
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return upperCase[Math.floor(Math.random() * upperCase.length)];
}

function giveRandomNumber() {
  const number = "1234567890";

  return number[Math.floor(Math.random() * number.length)];
}

function giveRandomSymbols() {
  const symbols = "!@#$%^&*()_-+={}[]|~`><?/";

  return symbols[Math.floor(Math.random() * symbols.length)];
}

// const generateBtn = document.getElementById("btn");
// generateBtn.addEventListener("submit",function(event){
//     event.preventDefault();

//         // let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//         let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//         let passwordLength = charLength;
//         let password = "";
//         for (var i = 0; i <= passwordLength; i++) {
//             let randomNumber = Math.floor(Math.random() * chars.length);
//             password += chars.substring(randomNumber, randomNumber +1);
//         }
//         document.getElementById("password").value = password;

// })
