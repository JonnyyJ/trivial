/**
 * Implement strStr().

Return the index of the first occurrence of needle in haystack, 
or -1 if needle is not part of haystack.
 */
function strStr(haystack, needle) {
    if (!needle) {
      return 0;
    }
  
    // Look for the needle at each position
    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
      if (haystack.slice(i, i + needle.length) === needle) {
        return i;
      }
    }
  
    return -1;
  }

