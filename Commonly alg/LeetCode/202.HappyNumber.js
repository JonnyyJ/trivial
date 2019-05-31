/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const set = new Set();
    
    const gen = _n => {
      let r = 0;
      for (let i = 0; i < _n.length; i++) {
        r += _n[i] ** 2;
      }
      if (r === 1) return true;
      if (set.has(r)) return false;
      set.add(r);
      return gen(`${r}`);
    }
    
    return gen(`${n}`);
  };