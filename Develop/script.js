// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword (){
var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "t", "u", "v", "w", "x", "y", "z"]
var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialChar = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"]
var pickedArray =

var passwordLength = generatePasswordLength ();

var charTypeSelected = false;

function generatePasswordLength() {
  var userChoice = 0;
  while ((userChoice < 8) || (userChoice > 128)){
    userChoice =window.prompt("Enter a number of characters between 8 and 128: ");

    //If not a number, make user reset choice to 0
    if (isNaN(userChoice)){
      userChoice = 0;
    }
  }
  return userChoice;
}

//Loop for user to pick at least one char type
while (charTypeSelected ==false){
  var lowerCaseChar = getChoice("lowercase");
  var upperCaseChar = getChoice("uppercase");
  var numChar = getChoice("numeric");
  var specialPick = getChoice("special");

  if ((lowerCaseChar) || (upperCaseChar) || (numChar) || (specialPick)){
    charTypeSelected = true;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
