// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // Starting creation of pasword 

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  var specialCharacters = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
  // Test Case 1: For arrays
  // console.log(nums);
  // console.log(lowerCase);
  // console.log(upperCase);
  // console.log(specialCharacters);

  var numberOfCharacters;
  while (true) {
    numberOfCharacters = parseInt(prompt("How many characters would you like for your password? (8 minimum - 128 maximum)"));
    if (numberOfCharacters >= 8 && numberOfCharacters <= 128) {
      break;
    }
    else {
      alert("8 characters the minimum and 128 characters is the maximum!");
    }
  }
  // Test Case 2: For password character length
  // console.log(numberOfCharacters);

  // Validation check to make sure user chooses at least one of the criteria 
  while (true) {
    var numCheck = confirm("Would you like to include numbers in your password?");
    var lowerCheck = confirm("Would you like to include lowecase letters in your password?");
    var upperCheck = confirm("Would you like to include uppercase letters in your password?");
    var specialCheck = confirm("Would you like to include special characters in your password?");
    if (numCheck === true || lowerCheck === true || upperCheck === true || specialCheck === true) {
      break;
    }
    alert("You have to choose one of the criteria to include in your password!");
  }

  var pickedCharacters = [];
  if (numCheck === true) {
    pickedCharacters.push(nums);
  }
  if (lowerCheck === true) {
    pickedCharacters.push(lowerCase);
  }
  if (upperCheck === true) {
    pickedCharacters.push(upperCase);
  }
  if (specialCheck === true) {
    pickedCharacters.push(specialCharacters);
  }
  // Test Case 3: Adding prompted choices of characters to empty array
  console.log(pickedCharacters);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
