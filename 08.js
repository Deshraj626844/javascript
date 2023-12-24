// function
function loginUserMessage(username){
    return `${username} just logged in `;
}

//console.log(loginUserMessage());

function calculateCartPrice(val1,val2,...num1){
    return num1;
}

//console.log(calculateCartPrice(200,400,500,600));


const user={
    username:"deshraj",
    price:500
}


function handleObject(anyobject){   //anyobject is generic so we can take any object  
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);
handleObject({
    username:"Yuvraj",
    price:399
});

const myNewArray=[200,300,400,600];

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));