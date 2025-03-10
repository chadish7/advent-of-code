// read input.txt file
import * as fs from 'fs';
import * as path from 'path';

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8');
const lines = input.split('\n');
var columnOne: number[] = [];
var columnTwo: number[] = [];

const numbers = lines.map((line) => {
    const twin_numbers = line.match(/\d+/g);
    if (twin_numbers) {
        columnOne.push(parseInt(twin_numbers[0]));
        columnTwo.push(parseInt(twin_numbers[1]));
    }
    return 0;
});

columnOne = columnOne.sort((a, b) => a - b)
columnTwo = columnTwo.sort((a, b) => a - b)
var diff_sum: number = 0;

for (let i = 0; i < columnOne.length; i++) {
    const difference = columnOne[i] - columnTwo[i];
    // console.log(difference);
    if (difference < 0) {
        diff_sum += difference * -1;;
    } else {
        diff_sum += difference;
    }
}

console.log("Difference score",diff_sum);

var sim_sum:number = 0;

columnOne.forEach(element => {
    columnTwo.filter((value) => {
        if (element == value) {
            sim_sum += element;
        }
    })
})

console.log("Similarity score", sim_sum);