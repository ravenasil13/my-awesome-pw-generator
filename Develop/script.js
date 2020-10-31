// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword (){
var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
var pickedArray = [];

var passwordLength = generatePasswordLength ();

var charTypeSelected = false;

function generatePasswordLength() {
  var userChoice = 0;
  while ((userChoice < 8) || (userChoice > 128)){
    userChoice =window.prompt("Enter a number of characters between 8 and 128: ");

    //If not a number, make user reset choice to 0
    if (isNaN(userChoice)) {
      userChoice = 0;
    }
  }
  return userChoice;
}

//Loop here for user to pick at least one char type
while (charTypeSelected ==false){
  var lowerAlpha = getChoice("lowercase");
  var upperAlpha = getChoice("uppercase");
  var numChar = getChoice("numeric");
  var specialPick = getChoice("special");

  if ((lowerAlpha) || (upperAlpha) || (numChar) || (specialPick)){
    charTypeSelected = true;
  }
  else {
    window.alert("You must select at least one character type.")
  }
}

//DRY. Add a function here to get all user choice options
function getChoice(currentOption){
  var userChoice = "x";
  messagePrompt = "";
  var messagePrompt = ("Would you like" .concat(currentOption));
  messagePrompt = messagePrompt.concat('characters (y/n)?');

  while (userChoice = "x") {
    userChoice = (window.prompt(messagePrompt));
    userChoice = userChoice.toLowerCase();
    if (userChoice == "y"){
      return true;
    }

    else if (userChoice == "n") {
      return false;
    }

  }
}


if (lowerAlpha) {
  pickedArray = pickedArray.concat(lowerCaseChar);
}
if (upperAlpha){
    pickedArray = pickedArray.concat(upperCaseChar);
}
if (numChar){
  pickedArray = pickedArray.concat(numbers);
}
if (specialPick){
  pickedArray = pickedArray.concat(specialChar);
}

  }


var passwordString ="";
for (var i = 0; i <passwordLength; i++) {
  passwordString += pickedArray[Math.floor(Math.random() * (pickedArray.length))];
}

  return passwordString;



var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
