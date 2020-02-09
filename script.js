// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);



var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ",", ")", "_", "-", "=", "/", "?", ".", ">", "<", "_", "+"];


function generatePassword() {
    // Ask user how many characters ?


    var characterCount = prompt('How many characters would you like your password to be');
    if (characterCount > 8 && characterCount < 128) {

        var numberConfirm = confirm("number");

        var lowercaseConfirm = confirm("lowercase");
    
        var uppercaseConfirm = confirm("uppercase");
    
        var specialConfirm = confirm("special");
    

    } else {
        alert("the length cant be less then 8 and higher then 128");
        
        return("Your Password goes here");
    }

    

   

    // ==================================================================================================

    var linkedArray = []
    if (numberConfirm === true) {
        linkedArray = linkedArray.concat(number);
    }

    if (lowercaseConfirm === true) {
        linkedArray = linkedArray.concat(lowercase)
    }

    if (uppercaseConfirm === true) {
        linkedArray = linkedArray.concat(uppercase);
    }

    if (specialConfirm === true) {
        linkedArray = linkedArray.concat(special);
    }
    // console.log(linkedArray);

    var passwordString = " ";

    for (i = 0; i < characterCount; i++) {
        passwordString = passwordString + linkedArray[Math.floor(Math.random() * linkedArray.length)];
    }



return passwordString;


}





    // // console.log(characterCount)
    // var lowercase = confirm("lowercase?");

    // if (lowercase == true) {
    //     passwordOptions = .concat(specialCharacters);



    // }
    // console.log(lowercase)

    // if (lowercase) {
    //     // how join 2 javascript arrays together ( google )

    //     // you want to  add lowercase arary to passwordOptions
    // }



    // Ask would you like lower case

    // would you like uppercase

    //would you like special characters

    // After passwordOptions arary has all 
    // how join 2 javascript arrays together ( google )
    // randomly pick the amount of characters the user requested
    // Character count holds how many characters we need



// Add event listener to generate button

