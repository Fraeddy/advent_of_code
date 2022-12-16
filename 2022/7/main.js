const fs = require('fs/promises');

async function part_one() {
    const input = await fs.readFile('./input.txt', 'utf-8')
    const cm = input.split('\n')

    let dirs = {};
    let dir_name;

    for (x of cm) {
        is_dir = x.match(/\$ cd \w+/)
        if (is_dir) {
            dir_name = x.split(' ').slice(-1)[0]
            dirs[dir_name] = 0;
            continue
        }

        if (x.match(/\d+/)) {
            dirs[dir_name] += parseInt(x.match(/\d+/)[0]);
        }
    }

    //console.log(dirs)

    // const filtered = Object.fromEntries(Object.entries(dirs).filter(([k, v]) => v <= 100000));
    // console.log(Object.values(filtered).reduce((a, b) => a + b))

}

async function part_two() {
}

async function main() {
    part_one()
}

main()