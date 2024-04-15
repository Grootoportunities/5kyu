// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.
//
//     Examples:
//
// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"
//
// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.
//
//     If the string S is an empty value or the integer N is not positive, return the first argument without changes.
//
//     This kata is part of the Simple Encryption Series:
//
//     Simple Encryption #1 - Alternating Split
// Simple Encryption #2 - Index-Difference
// Simple Encryption #3 - Turn The Bits Around
// Simple Encryption #4 - Qwerty
// Have fun coding it and please don't forget to vote and rank this kata! :-)

const encrypt = (text, n) => {

    if (text === "" || text === null || n <= 0) return text

    const splittedText = text.split("")

    const oddSymbols = splittedText.filter((s, index)=> index % 2 !== 0)
    const evenSymbols = splittedText.filter((s, index) => index % 2 === 0)

    return encrypt(oddSymbols.concat(evenSymbols).join(""), n - 1)
}

console.log(encrypt("This is a test!", 1))



const decrypt = (encryptedText, n) => {
    if (encryptedText === "" || encryptedText === null || n <= 0) return encryptedText;

    const length = encryptedText.length;
    const mid = Math.floor(length / 2);

    let oddSymbols = encryptedText.slice(0, mid);
    let evenSymbols = encryptedText.slice(mid);

    let decryptedText = '';

    for (let i = 0; i < mid || i < evenSymbols.length; i++) {
        if (i < evenSymbols.length) {
            decryptedText += evenSymbols[i];
        }
        if (i < oddSymbols.length) {
            decryptedText += oddSymbols[i];
        }
    }

    return decrypt(decryptedText, n - 1);
};

console.log(decrypt("hsi  etTi sats!", 1))