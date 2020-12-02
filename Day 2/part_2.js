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
    const pos = parts[0].split('-');
    const char = parts[1].replace(':', '');
    const pw = parts[2];

    // check rule
    const pwChars = pw.split('');
    console.log(pwChars);
    const pos_1 = pwChars[pos[0] - 1];
    const pos_2 = pwChars[pos[1] - 1];
    if (((pos_1 === char) && (pos_2 != char)) ||
        (( pos_2 === char) && (pos_1 != char)))
        return true;
    return false;
}