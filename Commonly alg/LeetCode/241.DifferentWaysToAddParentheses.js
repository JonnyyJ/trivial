/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {
    const parsed = parse(input);
    const cache = {};
    return computeParsed(parsed, 0, parsed.length - 1, cache);
};

function computeParsed(parsed, start, end, cache) {
    if (start === end) {
        return parsed.slice(start, start + 1);
    }
    
    const key = start + '-' + end;
    
    if (cache[key]) {
        return cache[key];
    }
    
    let i = start + 1;
    const rs = [];
    while (i < end) {
        // calculate from start to i - 1 as left
        const rsLeft = computeParsed(parsed, start, i - 1, cache);
        // calculate from i + 1 to end as right
        const rsRight = computeParsed(parsed, i + 1, end, cache);
        // combine left and right
        rs.push(...calc(rsLeft, rsRight, parsed[i]));
        
        i += 2;
    }
    
    // cache result
    cache[key] = rs;
    
    return rs;
}

function calc(rsLeft, rsRight, operator) {
    const rs = [];
    for (const left of rsLeft) {
        for (const right of rsRight) {
            if (operator === '+') {
                rs.push(left + right);
            } else if (operator === '-') {
                rs.push(left - right);
            } else {
                rs.push(left * right);
            }
        }
    }
    
    return rs;
}

// parse: [2, '-', 1, '-', 1]
function parse(input) {
    const parsed = [];
    let num = '';
    for (let i = 0; i < input.length; i++) {
        if (input[i] >= '0' && input[i] <= '9') {
            num += input[i];
        } else {
            parsed.push(+num, input[i]);
            num = '';
        }
    }
    
    parsed.push(+num);
    return parsed;
}