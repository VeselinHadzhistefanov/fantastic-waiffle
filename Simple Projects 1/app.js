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

console.log(getFullMessage(arr, 1));
