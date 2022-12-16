const fs = require('fs/promises');

async function part_one() {
    const input = await fs.readFile('./input.txt', 'utf-8')
    let data = input.split(/\n/)

    const k = data.map(x => x.split(',').map(y => {
        return y.split('-').map(z => parseInt(z))
    }))

    const res = k.map(y => {
        const [one, two] = y

        t1 = one[0] >= two[0] ? 1 : 0;
        t2 = one[1] <= two[1] ? 1 : 0;
        t3 = one[0] <= two[0] ? 1 : 0;
        t4 = one[1] >= two[1] ? 1 : 0;

        if ((t1 + t2 === 2) || (t3 + t4 === 2)) {
            return 1
        } else {
            return 0
        }
    })

    console.log(res.reduce((a, b) => a + b))

}

async function part_two() {
    const input = await fs.readFile('./input.txt', 'utf-8')
    let data = input.split(/\n/)

    const k = data.map(x => x.split(',').map(y => {
        return y.split('-').map(z => parseInt(z))
    }))

    const res = k.map(y => {
        const [one, two] = y

        t1 = (one[0] >= two[0] && one[0] <= two[1]) ? 1 : 0;
        t2 = (one[1] >= two[0] && one[1] <= two[1]) ? 1 : 0;
        t3 = (two[0] >= one[0] && two[0] <= one[1]) ? 1 : 0;
        t4 = (two[1] >= one[0] && two[1] <= one[1]) ? 1 : 0;

        if (t1 + t2 + t3 + t4 > 0) {
            return 1
        } else {
            return 0
        }
    })

    console.log(res.reduce((a, b) => a + b))

}

async function main() {
    part_two()
}

main()