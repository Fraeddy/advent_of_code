const fs = require('fs/promises');

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));
const lower_alphabet = alphabet.map(x => x.toLowerCase())
const lookup = [...lower_alphabet, ...alphabet]


async function part_one() {
    const input = await fs.readFile('./input.txt', 'utf-8')
    let data = input.split(/\n/)
    const packs = data.map(x => {
        const mid = x.length / 2
        const a = x.substring(0, mid)
        const b = x.substring(mid, x.length)
        return [a, b]
    })

    items = packs.map(pack => {
        const one = new Set(pack[0])
        const two = new Set(pack[1])
        let common = new Set([...one].filter(i => two.has(i)))
        common = Array.from(common)[0]
        return (common)
    })

    const score = items.map(x => {
        return (lookup.indexOf(x) + 1)
    }).reduce((a, b) => a + b)
    console.log(score)
}

async function part_two() {
    const input = await fs.readFile('./input.txt', 'utf-8')
    let data = input.split(/\n/)

    const chunk_size = 3;
    let grouped = []
    for (let i = 0; i < data.length; i += chunk_size) {
        grouped.push(data.slice(i, i + chunk_size))
    }

    const common_badge = grouped.map(x => {
        p1 = new Set(x[0])
        p2 = new Set(x[1])
        p3 = new Set(x[2])
        return [...p1].filter(i => p2.has(i) && p3.has(i))[0]
    })

    const score = common_badge.map(x => {
        return (lookup.indexOf(x) + 1)
    }).reduce((a, b) => a + b)
    console.log(score)
}

async function main() {
    part_two()
}


main()