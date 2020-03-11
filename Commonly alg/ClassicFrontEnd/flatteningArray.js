function deepFlatten(arr) {
    flatten = (arr)=> [ ].concat(...arr);
    return flatten(arr.map(x=>Array.isArray(x)? deepFlatten(x): x));
}
