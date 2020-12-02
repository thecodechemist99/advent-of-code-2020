const fs = require('fs');

// load file
const fileBuffer = fs.readFileSync(process.argv[2]);
const fileStr = fileBuffer.toString();

// extract values
const nums = fileStr.split('\n');

// output result
console.log(getResult());

function getResult () {
    for (let num_1 of nums) {
        for (let num_2 of nums) {
            if (+num_1 + +num_2 === 2020)
                return +num_1 * +num_2;
        }
    }
    return false;
}