const fs = require('fs/promises');

choice_map_1 = {
    A: 'Rock',
    B: 'Paper',
    C: 'Scissors',
    X: 'Rock',
    Y: 'Paper',
    Z: 'Scissors'
}

choice_map_2 = {
    A: 'Rock',
    B: 'Paper',
    C: 'Scissors',
    X: 'X',
    Y: 'Y',
    Z: 'Z'
}

value_map = {
    Rock: 1,
    Paper: 2,
    Scissors: 3
}

outcome_map = {
    X: 'lose',
    Y: 'draw',
    Z: 'win'
}

async function part_one() {
    const input = await fs.readFile('./input.txt', 'utf-8')
    let data = input.split('\n').map(x => x.split(' '))
    data = data.map(x => x.map(y => choice_map_1[y]))

    const scores = data.map(game => {
        if (game[0] === game[1]) {
            outcome_score = 3
        } else if (
            (game[1] === 'Rock' && game[0] === 'Scissors') |
            (game[1] === 'Paper' && game[0] === 'Rock') |
            (game[1] === 'Scissors' && game[0] === 'Paper')) {
            outcome_score = 6
        } else {
            outcome_score = 0
        }
        choice_score = value_map[game[1]]

        return (outcome_score + choice_score)
    })
    console.log(scores.reduce((a, b) => a + b))
}


async function part_two() {
    const input = await fs.readFile('./input.txt', 'utf-8')
    let data = input.split('\n').map(x => x.split(' '))
    data = data.map(x => x.map(y => choice_map_2[y]))

    const scores = data.map(game => {
        if (outcome_map[game[1]] === 'lose') {
            outcome_score = 0

            if (game[0] === 'Rock') {
                new_choice = 'Scissors'
            } else if (game[0] === 'Paper') {
                new_choice = 'Rock'
            } else {
                new_choice = 'Paper'
            }
        } else if (outcome_map[game[1]] === 'win') {
            outcome_score = 6

            if (game[0] === 'Rock') {
                new_choice = 'Paper'
            } else if (game[0] === 'Paper') {
                new_choice = 'Scissors'
            } else {
                new_choice = 'Rock'
            }
        } else {
            outcome_score = 3
            new_choice = game[0]
        }

        choice_score = value_map[new_choice]

        return (outcome_score + choice_score)
    })
    console.log(scores.reduce((a, b) => a + b))
}


async function main() {
    part_two()
}

main()