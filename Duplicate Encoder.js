const  duplicateEncode = word => {
    const chars = [...word.toLowerCase()];


    return chars.map(char => {

        let count = 0

        for (let i = 0; i < chars.length; i++) {
            if (char === chars[i]) {
                count++
            }
        }

        return count > 1 ? ")" : "("

    }).join("")
}

console.log(duplicateEncode("din"))