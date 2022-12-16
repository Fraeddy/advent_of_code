const fs = require('fs/promises');


async function main() {
    const input = await fs.readFile('./input.txt', 'utf-8')
    let data = input.split(/\n\s*\n/).map(x => x.split('\n'))
    data = data.map(x => x.map(y => parseInt(y)))
    const sums = data.map(x => x.reduce((a, b) => a + b))

    // answer to question 1
    //const max = Math.max(...sums)
    //console.log(max)

    // answer to question 2
    sums.sort((a, b) => b - a)
    console.log(sums.slice(0, 3).reduce((a, b) => a + b))
}

main()