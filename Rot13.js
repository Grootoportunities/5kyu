/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

    Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".*/


const rot13 = message => {
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
        "S", "T", "U", "V", "W", "X", "Y", "Z"]

    const letters = message.split("")

    const rot13Letters = letters.map(l => {

        if (alphabet.indexOf(l.toUpperCase()) === -1) {
            return l
        } else if (alphabet.indexOf(l.toUpperCase()) + 13 >= alphabet.length) {
            return alphabet[13 - (alphabet.length - alphabet.indexOf(l.toUpperCase()))]
        } else {
            return alphabet[alphabet.indexOf(l.toUpperCase()) + 13]
        }
    })

    letters.forEach((l, index) => l === l.toUpperCase() ? l : rot13Letters[index] = rot13Letters[index].toLowerCase())

    return rot13Letters.join("")
}


console.log(rot13('Ruby is cool!'))
console.log(rot13('Ruby is cool!') === 'Ehol vf pbby!')
console.log(rot13('?yiPbT/v?blH}l_q'))
console.log(rot13('?yiPbT/v?blH}l_q') === '?lvCoG/i?oyU}y_d')
console.log(rot13('P2NijFBwv'))
console.log(rot13('P2NijFBwv') === 'C2AvwSOji')
console.log(rot13('J+SP%NUvz$#'))

