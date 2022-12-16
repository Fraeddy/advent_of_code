const fs = require('fs/promises');

async function part_one() {
    const input = await fs.readFile('./input.txt', 'utf-8')

    const chunk = 4;
    for (let i = 0; i < input.length; i++) {
        if ((new Set(input.slice(i, i + chunk))).size === chunk) {
            console.log(i + chunk)
            return
        }
    }
}

async function part_two() {
    const input = await fs.readFile('./input.txt', 'utf-8')

    const chunk = 14;
    for (let i = 0; i < input.length; i++) {
        if ((new Set(input.slice(i, i + chunk))).size === chunk) {
            console.log(i + chunk)
            return
        }
    }
}

async function main() {
    part_one()
}

main()