let character;
character = "Hello";

let secondCharacter;
secondCharacter = ", this is a friendly message to remind you how much I love you <3";

let printableMessage = '';

let arr = [];
arr[1] = character;
arr[2] = secondCharacter;
arr[3] = '1';
arr[4] = 'r';

function getFullMessage(chars, i){
    if(chars[i] == undefined || chars[i] == null){
        return '';
    } else{
        return chars[i] + ' ' + getFullMessage(chars, i + 1);
    }
}

/*
* This program demonstrates how variables can be added to an array and then the array
* can be used recursively to create a message that contains a lovely wish for loved one.
*
* Concepts used:
* - Creating variables and initializing them on different lines to allow for better readability if needed.
* - Setting up the variables to be added to an array. >> simple way of adding variables,
* needs to be replaced with a better method in the existence of more variables. (Bigger variable set)
* - Printing the variables with a recursive function/method.
* In this situation the method uses a counter variable that needs to be fed into the function.
* Another way to do this is to create sub-arrays.
* */





console.log(getFullMessage(arr, 1));
