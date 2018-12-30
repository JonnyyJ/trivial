//objection
const properties = {
    'width': 1,
    'height': 1
};

if(properties[someName]){
    //do something
}
const properties = new Set();

properties.add('width');
properties.add('height');

if (properties.has(someName)){
    //do something
}
//Array.from method converts a set structure into an array
const items = new Set([1, 2, 3, 4, 5]);
const array = Array.from(items);

//using this array to deduplicate elements
function dedupez(array){
    return Array.from(new Set(array));
}

dedupez([1, 1, 2, 3])// [1, 2, 3]


//keys()，values()，entries()
let set = new Set(['red', 'green', 'blue']);

for(let item of set.keys()){
    console.log(item);
}
//r g b
for (let item of set.values()){
    console.log(item);
}
//r g b
for (let item of set.entries()){
    console.log(item);
}
//["red", "red"] ......

