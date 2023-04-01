// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var useNumbers = confirm("Would you like to include numbers?");
  var useLowerCase = confirm("Would you like to include lower case?");
  var useUpperCase = confirm("Would you like to include upper case?");
  var useSpecialCharacter = confirm(
    "Would you like to include special character?"
  );

  var passwordLength = prompt(
    "Please enter how long you would like password to be.\n\nYou must enter the value between 8 and 128."
  );

  console.log(useNumbers);
  var password = generatePassword(
    useNumbers,
    useLowerCase,
    useUpperCase,
    useSpecialCharacter,
    passwordLength
  );

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword(
  useNumbers,
  useLowerCase,
  useUpperCase,
  useSpecialCharacter,
  passwordLength
) {
  var password = "";

  var passwordCharacterPool =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789@#$";

  for (let i = 1; i <= 8; i++) {
    var char = Math.floor(Math.random() * str.length + 1);

    password += str.charAt(char);
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
