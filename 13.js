const myObject={
    js:"javascript",
    cpp:"C++",
    rb:"ruby"
}

for (const key in myObject) {            // For in loop 
    console.log(myObject[key]);
}

const programming=["js","ruby","java","c++"];
for (const key in programming) {
        console.log(key);
    }

    //ForEach loop
const coding = ["js","ruby","java","python","cpp"];
coding.forEach(function (item){
    console.log(item);
})

coding.forEach( (val) => {
    console.log(val);
})