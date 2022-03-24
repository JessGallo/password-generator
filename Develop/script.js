// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  function characterLength() {
    window.alert ("How many characters?");}

   
    


var generateBtn = document.querySelector("#generate");

var passwordCriteria = function() {
  var characterLenth = window.prompt("How many characters? Type a number between 8 - 128");
  var lowercaseLetters = window.prompt("Do you want to include lowercase letters? Type YES or NO");
  var uppercaseLetters = window.prompt("Do you want to include uppercase letters? Type YES or NO");
  var numericalCharacters = window.prompt("Do you want to include numbers? Type YES or NO");
  var specialCharacters = window.prompt("Do you want to include special characters? TYpe YES or NO");
};

var generatePassword = function() {

};

