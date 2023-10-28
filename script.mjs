let student1 = {
    "firstName" :"muhammad",
    "lastName" :"haseeb",
    "age" : 18,
    "isActive" : true,
    "subjects" : ["science","history","arts" ],
   
}
console.log(student1);

console.log(student1 ["firstName"]);
console.log(student1["lastName"]);
console.log(student1["subjects"]);

student1["firstName"] = "Haseeb";

console.log(student1 ["firstName"]);
console.log(student1["lastName"]);
console.log(student1["subjects"]);