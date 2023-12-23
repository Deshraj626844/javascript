const myArr=[10,11,12,13,14,15];
console.log(myArr[3]);

//Array Methods
myArr.push(6);            //Add element in the last
console.log(myArr);

myArr.pop();             //remove element from the last
console.log(myArr);

myArr.unshift(9);        //add element in the starting 
console.log(myArr); 

myArr.shift();           //remove element from the starting 
console.log(myArr);

console.log(myArr.includes(13));
console.log(myArr.indexOf(17));


//Slice and splice 
console.log("A",myArr);
const myn1=myArr.slice(1,3);

console.log(myn1);
console.log("B",myArr);

const myn2=myArr.splice(1,3);
console.log("C",myArr);
console.log(myn2);
