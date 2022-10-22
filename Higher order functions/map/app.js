// const names=['vimal','karan','vinay','adarsh'];
// const modifiedarray=names.map(name=>name.toUpperCase())
// console.log(modifiedarray)


const numbers=[2,4,5,6,3,6,6];
const multiplyBy2=numbers.map(number=>number*2);
console.log(multiplyBy2);
console.log(numbers);


//fetch elements from array of objects

const users=[
  {id:1,name:'vimal'},
  {id:2,name:'adarsh'},
  {id:3,name:'vinay'}
];

const userList=users.map(user=>user.name);
console.log(userList);