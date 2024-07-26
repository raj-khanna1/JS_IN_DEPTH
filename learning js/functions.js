
// NON-PRIMITIVES DATATYPES IN JS menas jo primitive se mil kr bane hain
// 1. array
// 2. objects
// 3. function

// 1.FUNCTIONS IN JS -> in JS WE write function on the place of return type while declaring,describing
// and in arguments also we don't have to describe the type of argument just give the name , don't even let or stuff !!
// function solve(){
//     console.log("solve fun has been called");
// }
// solve();
// // ques -> print from 1 to n using function
// let x=10;
// function print_to_n(n,s){
//     if(n==0)return;
//     print_to_n(n-1,s);
//     console.log(n,s);
// }
// print_to_n(x,"raj");


// note -> from a same function we can return dfferent type of return value
function solve(){
    let x=Math.random()>0.5?true:"SOMETHING WRONG HAS HAPPENED!!";
    return x;
}
console.log(solve());