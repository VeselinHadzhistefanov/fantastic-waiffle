let messageArray = "Hello, I love you to forever and back with all the space in between. Don't ever leave me cause your love is forever in me.";

function parseStringWithLoveChars(s) {
    let newCharPos = 1;
    for (let i = 1; i < s.length; i++) {
        if (s[newCharPos] == " ") {
            s = s.substring(1, newCharPos) + " <3 " + s.substring(newCharPos + 1);
            newCharPos += 3;
        }
        newCharPos += 1;
    }

    console.log(s);
}

function printStringWithFunChars(s) {
    for (let i = 0; i < s.length; i++) {
        if (s[i] == " ") {
            console.log('<3');
        } else {
            console.log(s[i]);
        }
    }
}

parseStringWithLoveChars(messageArray);
//printStringWithFunChars(messageArray);