// let originalValue={
//   name:'vimal',
//   age:18,
// }
// //shallow copy
// let copiedValue=originalValue;
// console.log(originalValue);
// console.log(copiedValue);

// copiedValue.name='vinay';
// console.log(originalValue);
// console.log(copiedValue);


//deep copy

// 1.JSON.stringify()
//but it has a limitation it will not work when our object have methods (functions) in it.
// let originalValue={
//   name:'vimal',
//   age:18,
//   address:{
//     country:'india',
//     city:'delhi'
//   },
//   getName:function(){
//     return this.name;
//   }
// }

// let copiedValue=JSON.parse(JSON.stringify(originalValue));

// copiedValue.name='vinay';
// console.log(originalValue);
// console.log(copiedValue);




// 2.object.assign and spread opperator 
// lodash _undersore.js (library)

// let originalValue={
//   name:'vimal',
//   age:18,
//   address:{
//     country:'Bharat',
//     city:'Delhi',
//   }
// }
// console.log(originalValue);

// let cloneValue=Object.assign({},originalValue);
// cloneValue.address.city='pune';

// console.log(originalValue);
// console.log(cloneValue);



