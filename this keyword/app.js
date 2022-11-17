'use strict';
// //this keyword
// //1.what is this? 
this.table="my table";
// // console.log(window.table);



console.log(global.table);

// var garage={
//   table:"garage table",
// }

// // console.log(window.garage.table);


// let johnRoom={
//   table:'john table',
//   cleanTable:function(){
//     console.log(this.table);
//   }
// }

// johnRoom.cleanTable();


//this inside a function 

// const cleanTable=function(){
//   console.log(`cleaning ${this.table}`);
// }

// cleanTable();