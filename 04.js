const marvel_heros=["thor","Ironman","spiderman"];
const dc_heros=["superman","flash","batman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

const allHeros=marvel_heros.concat(dc_heros);          //Concat Operator
console.log(allHeros);

const all_newheros=[...marvel_heros,...dc_heros];      //Spread Operator
console.log(all_newheros);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const useable=another_array.flat(Infinity);
console.log(useable);

console.log(Array.isArray("Narendra"));
console.log(Array.from("Narendra"));
console.log(Array.from({name:"narendra"}));  // Here while making array it get confused whether to make array of keys or values

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));