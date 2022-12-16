const fs = require('fs/promises');

let inp = {
    '1': ['Z', 'T', 'F', 'R', 'W', 'J', 'G'],
    '2': ['G', 'W', 'M'],
    '3': ['J', 'N', 'H', 'G'],
    '4': ['J', 'R', 'C', 'N', 'W'],
    '5': ['W', 'F', 'S', 'B', 'G', 'Q', 'V', 'M'],
    '6': ['S', 'R', 'T', 'D', 'V', 'W', 'C'],
    '7': ['H', 'B', 'N', 'C', 'D', 'Z', 'G', 'V'],
    '8': ['S', 'J', 'N', 'M', 'G', 'C'],
    '9': ['G', 'P', 'N', 'W', 'C', 'J', 'D', 'L']
}


async function part_one() {
    const input = await fs.readFile('./input.txt', 'utf-8')
    let data = input.split(/\n/)

    for (let i = 0; i < data.length; i++) {
        const tmp = data[i].replace('move ', '').replace('from ', '').replace('to ', '').split(' ')
        const n = parseInt(tmp[0])

        for (let j = 0; j < n; j++) {
            inp[tmp[2]].push(inp[tmp[1]].pop())
        }
    }

    let res = ''
    for (const [key, val] of Object.entries(inp)) {
        res += inp[key].slice(-1)
    }
    console.log(res)
}

async function part_two() {
    const input = await fs.readFile('./input.txt', 'utf-8')
    let data = input.split(/\n/)

    for (let i = 0; i < data.length; i++) {
        const tmp = data[i].replace('move ', '').replace('from ', '').replace('to ', '').split(' ')
        const n = parseInt(tmp[0])

        if (n === 1) {
            inp[tmp[2]].push(inp[tmp[1]].pop())
        } else {
            inp[tmp[2]].push(...inp[tmp[1]].slice(-n))

            let rest = inp[tmp[1]].length - n
            if (rest === 0) {
                inp[tmp[1]] = []
            } else {
                inp[tmp[1]] = inp[tmp[1]].slice(0, rest)
            }

        }
    }

    let res = ''
    for (const [key, val] of Object.entries(inp)) {
        res += inp[key].slice(-1)
    }
    console.log(res)
}


async function main() {
    part_two()
}

main()