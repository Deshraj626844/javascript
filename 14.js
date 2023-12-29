// Fetching array of an object from the database using forEach loop 

const myCoding=[
    {
        name:"aman",
        age:18
    },
    {
        name:"raj",
        age:20
    },
    {
        name:"alok",
        age:23
    }
];

myCoding.forEach( (item) => {
    console.log(item.name);
})