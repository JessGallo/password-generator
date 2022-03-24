var generateBtn = document.querySelector("#generate");

var generatePassword = function() {
  var characterLength = window.prompt("How many characters? Type a number between 8 - 128");
    if (characterLength > 8 && characterLength < 128) {
      console.log(characterLength);
    }
    if (characterLength < 8 || characterLength > 128) {
      window.alert("That is not within the character range. Try again.");
      return generatePassword();
    }

  var lowercaseLetters = window.prompt("Do you want to include lowercase letters? Type YES or NO");
  lowercaseLetters = lowercaseLetters.toLowerCase();
    if (lowercaseLetters === "yes") {
      console.log("include lowercase letters");
    } 
    if (lowercaseLetters === "no") {
      console.log("don't include lowercase letters");
    }

  var uppercaseLetters = window.prompt("Do you want to include uppercase letters? Type YES or NO");
  uppercaseLetters = uppercaseLetters.toLowerCase();
    if (uppercaseLetters === "yes") {
      console.log("include upercase letters");
    } 
    if (uppercaseLetters === "no") {
      console.log("don't include upercase letters");
    }
    
  var numericalCharacters = window.prompt("Do you want to include numbers? Type YES or NO");
  numericalCharacters = numericalCharacters.toLowerCase();
    if (numericalCharacters === "yes") {
      console.log("include numerical characters");
    } 
    if (numericalCharacters === "no") {
      console.log("don't include numerical characters");
    }
    
  var specialCharacters = window.prompt("Do you want to include special characters? Type YES or NO");
  specialCharacters = specialCharacters.toLowerCase();
  if (specialCharacters === "yes") {
    console.log("include special characters");
  } 
  if (specialCharacters === "no") {
    console.log("don't include special characters");
  }

};

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
