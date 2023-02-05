// Assignment code 

var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min 
    min = 0
}

var rand = Math.random()
return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}

function generatePassword() {
  
  while (true) {
    var userInput = window.prompt("How long would you like your password to be?")
  
  
    // User leaving  prompt
  if (userInput === null) {
    return
  }
    var passwordLength = parseInt(userInput)

    if (isNaN(passwordLength)) {
      window.alert("Value not accepted")
    } else if (passwordLength <8 || passwordLength > 128) {
      window.alert("Password must be between 8 and 128 characters")
    } else {
      break
    }

  }

   var userWantsNumbers = window.confirm("Do you want to include numbers in your password?")
   var userWantsLowercase = window.confirm("Do you want to include lowercase letters in your password?")
   var userWantsUppercase = window.confirm("Do you want to include UPPERCASE letters in your password?")
   var userWantsSymbols = window.confirm("Do you want to include symbols in your password?")

   var numberList = ['1','2','3','4','5','6','7','8','9','0']
   var lowercaseList = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
   var uppercaseList = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
   var symbolList = ['$','#','%','@','*','^','&','!','(',')','[',']','?','+','/']

   var optionsCart = []

   for (var i = 0; i < lowercaseList.length; i++) {
    uppercaseList[i] = lowercaseList[i].toUpperCase()
   } 

   if (userWantsNumbers === true) {
    optionsCart.push(numberList)
   }

   if (userWantsLowercase === true) {
    optionsCart.push(lowercaseList)
   }

   if (userWantsUppercase === true) {
    optionsCart.push(uppercaseList)
   }

   if (userWantsSymbols === true) {
    optionsCart.push(symbolList)
   }

   var generatePassword = ""

   for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(optionsCart)
    var randomChar = getRandomItem(randomList)
    generatePassword += randomChar
   }

   return generatePassword

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
    passwordText.value = password;
  }
  
}

