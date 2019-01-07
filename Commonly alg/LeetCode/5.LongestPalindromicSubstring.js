/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let res = "";
    let cur = "";
    for(let i = 0; i < s.length; i ++){
        for(let j = i; j < i + 2; j ++){
            let left = i;
            let right = j;
            while(s[left] && s[left] === s[right]){
                cur = s.substring(left, right + 1);
                if(cur.length > res.length) res = cur;
                left --;
                right ++;
            }
        }
    }
    return res;
};

var longestPalindrome = function(s){
    let res = ""
    function checkPalindrome(l, r){
      while (l >= 0 && r < s.length){
              if (s[l] == s[r]){
                  l -= 1;
                  r += 1;
              } else{
                  break;
              }
          }
          l += 1;
          r -= 1;
          if (r - l + 1 > res.length){
              res = s.substring(1, r + 1);
          }
      }
      for (let i = 0; i < s.length; i++){
          if (i > 0 && s[i] == s[i - 1]){
              checkPalindrome(i - 1, i);
          }
          checkPalindrome(i, i);
      }
      return res;
    }
