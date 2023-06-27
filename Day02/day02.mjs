import { readFileSync } from "node:fs";
import _ from "lodash";

const lines = readFileSync("day02.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n") // Split on newline
  .map((line) => line.split(" ")); //Parse each line into a number

const moves = {
    'rock': 1,
    'paper': 2,
    'scissors': 3
};

const solution = {
    A: {
        X: moves.scissors,
        Y: moves.rock,
        Z: moves.paper
    },
    B: {
        X: moves.rock,
        Y: moves.paper,
        Z: moves.scissors
    },
    C: {
        X: moves.paper,
        Y: moves.scissors,
        Z: moves.rock
    }
}

const mapInput = {
    A: moves.rock,
    B: moves.paper,
    C: moves.scissors,
    X: moves.rock,
    Y: moves.paper,
    Z: moves.scissors
}

function score(oppenentMove, ourMove) {
    //tie
    if(oppenentMove === ourMove) {
        return ourMove + 3
    }

    //We win
    if( oppenentMove === moves.rock && ourMove === moves.paper ||
        oppenentMove === moves.paper && ourMove === moves.scissors ||
        oppenentMove === moves.scissors && ourMove === moves.rock
    ) {
        return ourMove + 6
    }

    //We lose
    return ourMove;
}

// Return a new object to avoid side effects between part 1 and 2
function getInput() {
  return [...lines];
}

function part1() {
  const outcomes = lines.map(line => {
    const oppenentMove = mapInput[line[0]];
    const ourMove = mapInput[line[1]];
    
  return score(oppenentMove, ourMove);
  });
  const sumOfOutComes = _.sum(outcomes)
  console.log(sumOfOutComes)
}

function part2() {
    const outcomes = lines.map(line => {
        const oppenentMove = mapInput[line[0]];
        const ourMove = solution[line[0]][line[1]];
      return score(oppenentMove, ourMove);
      });
      const sumOfOutComes = _.sum(outcomes)
      console.log(sumOfOutComes)
}

part1();
part2();