// let animals=['cat', 'Dog', 'tiger', 'lion'];
// let names=['vimal', 'karan', 'vinay', 'adarsh'];
// //we can use concat method to combine arrays when we have less number of arrays.
// let newarray=animals.concat(names);
// console.log(newarray);
// console.log(...animals,...names);

//string : spread operator is not good fit when we have to work with strings

// const Team1=['vinay', 'vimal', 'adarsh'];
// const newPlayer='shivanshu';
// const newTeam=[...Team1,...newPlayer];
// console.log(newTeam);

// clone

// console.log('copying an array');
// const productList=['camera','phone'];
// const newProducts=productList;

// console.log(newProducts);

// newProducts.push('speaker');
// console.log(newProducts);
// console.log(productList)


//better approach
//when we clone an array we make sure we do not affect the original array when we  alter the the new  array.
// and we can do it with the help of spread operator.
// console.log('copying an array');
// const productList=['camera','phone'];
// const newProducts=[...productList];

// console.log(newProducts);

// newProducts.push('speaker');
// console.log(newProducts);
// console.log(productList)




//spread with objects

// console.log('spread with objects');

//1.clone the object

// const person={
//   name:'vimal',
//   age:'18',
//   add:'delhi'
// };

// const clonePerson=person;

// clonePerson.phone=9;
// console.log(clonePerson);
// console.log(person);


//better approach
//when we clone an object we make sure we do not affect the original array when we  alter the the new  object.
// and we can do it with the help of spread operator.
// const person={
//   name:'vimal',
//   age:'18',
//   add:'delhi'
// };

// const clonePerson={...person};

// clonePerson.phone=9;
// console.log(clonePerson);
// console.log(person);



// 2.merging

// const emp={
//   name:'rajesh',
//   job:'developer',
// }

// const personalDetails={
//   age:20,
//   add:'delhi',
// }

// const mergedObject={...emp,...personalDetails}
// console.log(mergedObject);













//spread operator with function call

// const numbers=[23,45,1,2,43,54,25];
// console.log(Math.min(...numbers));
// console.log(Math.max(...numbers));








//immutability with spread operator

// it is a bad approach because it is mutating my original array.
// const todo=[
//   {task:'running',status:true},
//   {task:'painting',status:false},
// ];


// function addnewtodo(newtodo){
//   todo.push(newtodo);
//   return todo;
// }
// let result=addnewtodo({task:'cycling',status:true});
// console.log(result);
// console.log(todo.length);


//this approach is much better because it does not mutate the original object

// const todo=[
//   {task:'painting',status:true},
//   {task:'running', status:false}
// ];


// function addnewtodo(newtodo){
//   return[
//     ...todo,{...newtodo}
//   ];
// }

// const todoList=addnewtodo({task:"meditation",status:true});
// console.log(todoList);


// const person={
//   name:'david',
//   age:34
// }

// console.log(person);

// let multiply=(...values)=>{
//   return values.reduce((acc,value)=>{
//     return acc*value;
//   })
//   }


// let sum=(...values)=>{
//   return values.reduce((acc,value)=>{
//     return acc*value;
//   },0)
//   }

//   let subtract=(...values)=>{
//     return values.reduce((acc,value)=>{
//       return acc-value;
//     })
//     }

//   let divide=(...values)=>{
//     return values.reduce((acc,value)=>{
//       return acc/value;
//     })
//     }

// function calculate(type,...values){
//  return type(...values);
// }

// console.log(calculate(subtract,3,6));


let arr1=[1,1,1];
let arr2=[2,2,2];
let text1=arr1.toString();
let txt1=parseInt(text1.replaceAll(',',''),10)
console.log(txt1);
let text2=arr1.toString();
let txt2=parseInt(text2.replaceAll(',',''),10)
console.log(txt2);

let result=txt1+txt2;
console.log(result);