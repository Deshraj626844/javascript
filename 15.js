// Filter map and reduce in javascript 





// Filter

// const myNums=[1,2,3,4,5,6,7,8,9,10];

// const newNums= myNums.filter( (num) => num>5 );

// console.log(newNums);






// Map 

// const myNumbers=[1,2,3,4,5,6,7,8,9,10];

// const newNum=myNumbers
//                     .map( (num) => num*10 )
//                      .map( (num) => num+1)
//                      .filter( (num) => num >=50 );
 
// console.log(newNum);




// Reduce 


const myNums=[1,2,3];

const myTotal = myNums.reduce( function (acc,currval) {
    console.log(`acc: ${acc} and current value ${currval}`);
    return acc + currval
},3)

console.log(myTotal);