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

  if (
    useNumbers === false &&
    useLowerCase === false &&
    useUpperCase === false &&
    useSpecialCharacter === false
  ) {
    alert("You must select at least one character type");
    return;
  }

  var passwordLength = prompt(
    "Please enter how long you would like password to be.\n\nYou must enter the value between 8 and 128."
  );
  passwordLength = parseInt(passwordLength);

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length");
    return;
  }

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

  var passwordCharacterPool = "";

  if (useNumbers) {
    passwordCharacterPool += "0123456789";
  }

  if (useLowerCase) {
    passwordCharacterPool += "abcdefghijklmnopqrstuvwxyz";
  }

  if (useUpperCase) {
    passwordCharacterPool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (useSpecialCharacter) {
    passwordCharacterPool += "@#$";
  }

  for (let i = 1; i <= passwordLength; i++) {
    var char = Math.floor(Math.random() * passwordCharacterPool.length);
    password += passwordCharacterPool.charAt(char);
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
