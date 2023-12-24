//Object Destructuring

const course={
    coursename:"Javascript",
    price:"999",
    courseInstructor:"Hitesh Sir"
}

console.log(course.courseInstructor);

const {courseInstructor:ci}=course;

console.log(ci);

const employee={
    firstname:"deshraj",
    lastname:"singh",
    dateofbirth:2003
};

const{firstname:fn,lastname:ln,dateofbirth:dob}=employee;
console.log(fn,ln,dob);