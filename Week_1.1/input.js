const crypto = require('crypto');

//Function to find on input string that produces a  hash start
function findHashEWithPrefix(prefix){
     let input = 0;
     while(true){
        let inputStr = input.toString();
        let hash = crypto.createHash('sha256').update(inputStr)
        if(hash.StartsWith(prefix)) {
            return { input: inputStr, hash: hash };
        }
        input ++;
     }
}
//Find and print the input string and hash
const result = findHashEWithPrefix('0000');
console.log(`Input: ${result.input}`);
console.log(`Hash: ${result.hash}`);