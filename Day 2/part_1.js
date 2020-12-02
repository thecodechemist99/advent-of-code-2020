const fs = require('fs');

// load file
const fileBuffer = fs.readFileSync(process.argv[2]);
const fileStr = fileBuffer.toString();

// extract rules
const rules = fileStr.split('\n');

// output result
console.log(getResult());

function getResult () {
    let correct = 0;
    for (let rule of rules) {
        if (checkRule(rule))
            correct++;
    }
    return correct;
}

function checkRule (rule) {
    // extract values
    const parts = rule.split(' ');
    const range = parts[0].split('-');
    const char = parts[1].replace(':', '');
    const pw = parts[2];

    // check rule
    const regex = new RegExp(char, 'g');
    if (pw.match(regex) != null) {
        const charCount = pw.match(regex).length;
        if((charCount >= range[0]) && (charCount <= range[1]))
            return true;
    }
    return false;
}