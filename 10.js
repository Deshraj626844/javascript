// Arrow Function 
const user={
    username:"Yuvraj",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username}, Welcome to Website`);
    }
}

// user.welcomeMessage();
// user.username="sam";
// user.welcomeMessage();

// console.log(this);

// This keyword uncertain behaviour in function

// function chai(){
//     let username="Jitesh";
//     console.log(this.username);
// }
// chai();

// const chai= () => {
//     let username="Jitesh";
//     console.log(this);
// }
// chai();

// const addTwo =(num1,num2) => {    // Arrow Function
//     return num1+num2;
// }

// console.log(addTwo(4,5));

const addTwo =(num1,num2) => num1+num2 ;
console.log(addTwo(7,3));