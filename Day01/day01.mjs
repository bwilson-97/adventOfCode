import { readFileSync } from 'node:fs';
import _ from 'lodash';


const elves = readFileSync("day01.txt", { encoding: "utf-8" })
    .replace(/\r/g, "")
    .trim()
    .split("\n\n");

function part1() {
    const calories = elves.map((elf) => {
        const calories = elf.split('\n').map(Number)
        return calories.reduce((previous, current) => previous+current, 0);
    })

    calories.sort(function(a, b) {
        return b - a;
    });
    console.log(calories);  
    return(calories)
}

function part2(calories) {
    const topThree = calories.slice(0, 3);
    console.log(topThree);
    console.log(_.sum(topThree))
}

const calories = part1();
part2(calories)