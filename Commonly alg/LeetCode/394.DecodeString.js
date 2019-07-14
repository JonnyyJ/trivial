/**
 * @param {string} input
 * @return {string}
 */
var decodeString = function(input, low = 0, high = input.length - 1) {
    let repeat = 1;
    let open = 0;
    let bracketStart;
    let decoded = '';
    
    while (low <= high) {
        if (input[low] === '[') {
            if (open === 0) {
                bracketStart = low;
            }
            open += 1;
            low += 1;
        } else if (input[low] === ']') {
            open -= 1;
            if (open === 0) { // Rec.
                const repeatText = decodeString(input, bracketStart + 1, low);
                decoded += repeatText.repeat(repeat);
            }
            low += 1;
        } else if (open > 0) {
            // Ignore character (part of recursive fun)
            low += 1;
        } else if (!isNaN(input[low])) {
            repeat = 0;
            while (!isNaN(input[low])) {
                repeat *= 10;
                repeat += Number(input[low]);
                low += 1;
            }
        } else {
            decoded += input[low];
            low += 1;
        }
    }
    
    return decoded;
};