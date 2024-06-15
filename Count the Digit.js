const nbDig = (n, d) => {

    let count = 0

    for (let i = 0; i <= n; i++) {
        const digit = (i * i).toString()
        digit.split("").forEach(digit => digit === d.toString() ? count++ : digit)
    }

    return count
}

console.log(nbDig(5750, 0))