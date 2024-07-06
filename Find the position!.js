// When provided with a letter, return its position in the alphabet.
//
// Input :: "a"
//
// Ouput :: "Position of alphabet: 1"

const position = letter => {
    const alphabet = ["a", "b", 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    const position = alphabet.findIndex(l => l === letter)

    return `Position of alphabet: ${position + 1}`
}

console.log(position("d"))