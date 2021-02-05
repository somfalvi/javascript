let Objektum ={1:"a",2:"b",3:"c"};
console.log(Object.keys(Objektum));
console.log(Object.values(Objektum));
Object.assign(Objektum,{2:"c",3:"d",4:"e"});
console.log(Objektum);

let obj1 = {value:10};
let obj2 = obj1;
let obj3 = {value:10};

console.log(obj1 == obj2);
//true
console.log(obj1 == obj3);
//false

const score ={visitors:0,home:0};
score.visitors=1;
score = {visitors:1,home:1};
