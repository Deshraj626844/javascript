// Scope 

let a=40;

if(true){
    let a=10;
    const b=20;
    var c=30;
    //console.log("Inner: ",a);
}
 a=47;
//console.log(a);
//console.log(b);
//console.log(c);

//Closure
function one(){
    const username="Deshraj";

    function two(){
        const website="tutorial";
        console.log(username);
    }
    //console.log(website);

    two();
}

one();

//Hoisting

console.log(addone(5));
function addone(num){
    return num+1;
}