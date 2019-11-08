var singleNumber = function(nums) {
    let k = nums.reduce((cur, n) => {return n ^ cur}, 0);
    
    for(let i = 0 ; i < 32; i++) {
        let m = 1<<i;
        let t = k & m;
        if(t === 0) continue;
        //  Find the array that &m = 1;
          n1 = nums.filter(a=> {return (a&m) > 0}).reduce((cur, n) =>{ return n ^ cur}, 0);
        n2 = k ^ n1;
        break;
    }
    return [n1, n2];
};