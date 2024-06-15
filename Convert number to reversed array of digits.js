const digitize = n => [...n.toString()].map(Number).reverse()

console.log(digitize(123))