let var1 = 'Hello';
let message = ", I love you, be with me. !!";

let s = [];
s[1] = var1;
s[2] = message;

function thisIsARecursivePrintFunction(m){
    if(m.length > 1){
        return m[1] + thisIsARecursivePrintFunction(m.slice(1, m.length));
    } else{
        return '';
    }
}

console.log(thisIsARecursivePrintFunction(s));