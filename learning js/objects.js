// OBJECT IS like real life entity having attributes and methods 


// objects in JS  ->like key value pair
// key :value is knows as properties
// key :function is knows as method
// let people={
//     name:"raj",
//     age:21,
//     address:{//address ki value khu me aek object hai phir
//         city:"haridwar",
//         pincode:249404
//     },
//     projects:["bmsc","rtci","lpu_system"]
// }
// console.log(people.name);
// console.log(people.address);
// console.log(people.address.pincode);
// console.log(people.projects);
// console.log(people.projects[2]);

// EXAMPLE 2
let student={
    name:"raj",
    age:22,
    year:3,
    address:{
        city:"haridwar",
        pincode:249404
    },
    say_name:function (){
        console.log("MY name is ","raj");
    }

};
console.log(student);
console.log(student.age);
console.log(student.year);
console.log(student.address);
console.log(student.address.city);
student.say_name(); //methods