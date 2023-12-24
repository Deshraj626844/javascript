// object literals

const mySym=Symbol("key1");

const User={
    firstname:"Deshraj",
    lastname:"Singh",
    [mySym]:"mykey1",
    age:18,
    location:"Indore",
    email:"deshraj@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Wednesday"]
}

console.log(User.age);
console.log(User["location"]);
User.email="deshraj@amazon.com";
Object.freeze(User.email);
console.log(User);

User.greeting = function(){
    console.log("Hello user");
}
console.log(User.greeting);