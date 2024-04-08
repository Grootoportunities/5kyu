// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
//
//     Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
//
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

const longest = (s1, s2) => {

    const s = (s1 + s2).split("").sort().join("")

    let arr = []

    const unique =  new Set(s) //(s1 + s2).split("").sort().join("")

    unique.forEach(el => arr.push(el))

    return arr.join("")
}

console.log(longest("aretheyhere", "yestheyarehere"))