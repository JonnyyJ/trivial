/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let states = new Set();
    addStat(states, 0, p);
    for (let c of s) {
        let next = new Set();
        for (let stat of states) {
            if (c === p[stat] || p[stat] === '.') {
                addStat(next, stat + 1, p);
            }
        }
        states = next;
    }
    return states.has(p.length);
};

function addStat(states, stat, p) {
    if (p[stat] === '*') {
        states.add(stat - 1);
        addStat(states, stat + 1, p);
    } else {
        states.add(stat);
        if (p[stat + 1] === '*') {
            addStat(states, stat + 2, p);
        }
    }
}