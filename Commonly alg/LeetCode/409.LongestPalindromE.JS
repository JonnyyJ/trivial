/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const map = {};
    for (let i = 0; i < s.length; i++) {
      map[s[i]] = map[s[i]] || 0;
      map[s[i]]++;
    }
    
    const counts = Object.values(map);
    const even = counts.filter(c => c % 2 === 0);
    const odd = counts.filter(c => c % 2 && c > 2).map(c => c - 1);
    let sum = 0;
    if (even.length > 0) sum += even.reduce((a, b) => a + b, 0);
    if (odd.length > 0) sum += odd.reduce((a, b) => a + b, 0);
    if (counts.filter(c => c % 2).length > 0) sum += 1;
    return sum;
  };