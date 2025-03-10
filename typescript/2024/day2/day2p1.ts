// read input.txt file
import * as fs from 'fs';
import * as path from 'path';

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8');
const lines = input.split('\n');
var safeSum: number = 0

const numbers = lines.map((line) => {
    const numbers = line.match(/\d+/g);
    if (!numbers){ return }
    let safe: boolean = true
    let lastDiff: number | undefined = undefined;
    for (let i = 0; i < numbers.length - 1; i++){
        let current: number = parseInt(numbers[i]);
        let next: number = parseInt(numbers[i+1]);
        let currentDiff: number = next - current;
        if (currentDiff === 0 || Math.abs(currentDiff) > 3){
            safe = false
            break
        }
        if (lastDiff === undefined){
            lastDiff = currentDiff;
            continue
        }
        if ((currentDiff < 0 && lastDiff > 0) || (currentDiff > 0 && lastDiff < 0) ){
            safe = false
            break
        }
        lastDiff = currentDiff;
    }
    if (safe){ 
        safeSum++;
    }
});

console.log("Safe:",safeSum);
