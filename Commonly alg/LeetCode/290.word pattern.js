var wordPattern = function(pattern, str) {
    const words = str.split(" ");
    var map1 = {};
    var map2 = {};
    if (pattern.length != words.length) return false;
    for (let i = 0; i < pattern.length; i++) {
        if (map1.hasOwnProperty(pattern[i]) && map2.hasOwnProperty(words[i])) {
            if (map1[pattern[i]] != words[i] || map2[words[i]] != pattern[i]) {
                return false;
            }
        } else if (map1.hasOwnProperty(pattern[i]) || map2.hasOwnProperty(words[i])) {
            return false;
        } else {
            map1[pattern[i]] = words[i];
            map2[words[i]] = pattern[i];
        }
    }
    return true;
};