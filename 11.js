// IIFE 

(function chai(){
    console.log("DB Connected");
})();

//IIFE using Arrow Function

( (name) => {
    console.log(`Connected 2 ${name}`);
} )("Deshraj");