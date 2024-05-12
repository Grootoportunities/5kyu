const  dnaStrand = dna => dna.split("").map(dna => dna === 'A' ? 'T' : dna === 'T' ? 'A' : dna === 'C' ? 'G' : dna === 'G' ? 'C' : dna).join("")



console.log(dnaStrand("AAAA"))