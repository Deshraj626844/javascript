//const tinderUser=new Object(); // Singleton Object


const tinderUser={}   //Non-singleton Object

tinderUser.Id="123abc";
tinderUser.Name="Ben Stokes";
tinderUser.isLoggedIn=false;

//console.log(tinderUser);

const regularUser={
    email:"singh@gmail.com",
    fullname:{
        firstname:"Deshraj",
        lastname:"Singh"
    },
    age:18
}
//console.log(regularUser.fullname.lastname);



// Merging two objects 
const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};
const obj4={5:"e",6:"f"};

//const obj3={obj1,obj2}
const obj3=Object.assign({},obj1,obj2,obj4);

console.log(obj3);

const obj5={...obj1,...obj2,...obj4};  //By using spread operator
console.log(obj5);