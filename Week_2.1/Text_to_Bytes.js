function asciiToBytes(asciiString) {
    const arr = [];
    for(let i =0; i<asciiString.length; i++){
        const char = asciiString[i];
        arr.push(char.charCodeAt(0));
    }
    return new Uint8Array(arr);
}

//Example usage:
const arr = "Hello";
const byteArray = asciiToBytes(ascii);
console.log(byteArray);