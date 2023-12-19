// Array of special characters to be included in password
const specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  let passwordLength = 0;
  // Prompt user until enters valid number
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = Number(prompt("Enter a value between 8 and 128:"));
  }

  // Prompt user for character types
  const optionalTypes = ["lowercase", "uppercase", "numeric", "special"]
  let choosenTypes = []
  let userAnswer;

  while (true) {
    for (let i = 0; i < 4; i++) {
      userAnswer = prompt(`Would you like ${optionalTypes[i]} to be included in the password? (yes/no)`).toLowerCase();
      if (userAnswer === "yes") {
        choosenTypes.push(optionalTypes[i])
      }
    }
    // If choosen type array is not bigger than 0, keep prompting user
    if (choosenTypes.length > 0) {
      break;
    } else {
      alert("You should at least choose one character type!")
    }
  }

  return [passwordLength, choosenTypes];
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  const passwordOptions = getPasswordOptions();
  const passwordLength = passwordOptions[0];
  const choosenTypes = passwordOptions[1];

  for (let i = 0; i < passwordLength; i++) {
    let password = "";
    let choosenChar = "";
    const randomType = getRandom(choosenTypes);
    
    if (randomType === "lowercase") {
      choosenChar = getRandom(lowerCasedCharacters);
    } else if (randomType === "uppercase") {
      choosenChar = getRandom(upperCasedCharacters);
    } else if (randomType === "special") {
      choosenChar = getRandom(specialCharacters);
    } else if (randomType === "numeric") {
      choosenChar = getRandom(numericCharacters);
    }

    password = password + choosenChar;
  }

  return password;
}

// Get references to the #generate element
const generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);