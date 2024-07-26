/*
ECMAScript or JS Language Types are:
        => Undefined,NULL,Boolean,String,Symbol,Number and Object.

    1. number => 1,-2
    2. strings => three ways to write strings in JS => "", '' , ` `
    
    3. UNDEFINED => something not defined yet but may be defined later.
                    ex -> var status=undefined;

    4. OBJECTS =>  If we have to store Key-Value pairs , then we use objects.
                ex -> {
                         name:"raj",
                         pincode:249230
                      }
                  2. Keys should be unique.

                => so why use objects?
                => bcoz when we have to store real world entities we have many different things
                   related to that entity, so to store that kind of information we have objects
                   , in which we can store the attributes and methods of the entity also.

                => IT is a non-primtive datatype which means it is not atomic in nature.
                    non-primtive datatypes are the composition of other primitive datatypes ex- objects.
    
    5. NUll -> NULL simply represents empty value means nothing.
                whereas as undefined is not even null means it is not even empty. 





*/
var marks=10;
var x;
var name="raj";
var khali=null;
var status=undefined;
var student1={// an object type of variable
    name:"raj",
    course:"bca",
    gender:"male",
    address:{
        city:"haridar",
        pincode:"249543"
    },
    year:2
};
console.log("marks is ",marks);
console.log("x is ",x);
console.log("name is ",name);
console.log("khali is ",khali);
console.log("status is ",status);
console.log(student1.name);
console.log(student1.year);
console.log(student1.address);
console.log(student1.address.pincode);
console.log(student1.gender);
