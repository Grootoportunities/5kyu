// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//
//     The output should be two capital letters with a dot separating them.
//
//     It should look like this:
//
// Sam Harris => S.H
//
// patrick feeney => P.F
//


const abbrevName = name => {
    const initials = name.split(" ")

    return `${initials[0].split("")[0].toUpperCase()}.${initials[1].split("")[0].toUpperCase()}`
}

console.log(abbrevName("Sam Harris"))