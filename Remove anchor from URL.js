const removeUrlAnchor = url =>  url.split("#")[0]


console.log(removeUrlAnchor('www.codewars.com#about'))
console.log(removeUrlAnchor('www.codewars.com/katas/'))