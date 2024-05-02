const titleCase = (title, minorWords) => {

    const words = title.toLowerCase().split(" ")

    if (!minorWords) {
        const letters = words.map(word => word.split(""))

        letters.forEach(word => word[0] = word[0].toUpperCase())

        return letters.map(word => word.join("")).join(" ")
    }

    return words.map((word, index) => {

        const letters = word.split("")

        if (minorWords.split(" ").findIndex(minor => minor === word) !== -1 || index !== 0) {
            letters[0] = letters[0].toUpperCase()
            return letters.join("")
        }

        letters[0] = letters[0].toUpperCase()

        return letters.join("")
    }).join(" ")
}

console.log(titleCase('a clash of KINGS', 'a an the of'))
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'))
console.log(titleCase('the quick brown fox'))