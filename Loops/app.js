//Loops
// for(let i=0;i<5;i++){
//   console.log('loop'+i)
//   if(i==3) break
// }


//array
const names=['vimal','vinay','adarsh','manoj'];
// for(let i=0;i<names.length;i++){
//   console.log(names[i]);
// }

// for(name of names){
//   console.log(name);
// }

//The for of loop works slower than the traditional for loop.

const person={
  firstName:'vimal',
  lastName:'kumar',
  age:18,
  gender:'M',
}


//for in loop 
//for in loop is use to handle the objects.

// let text='';
// for(details in person){
//   text+=person[details] + "<br>";
// }

// document.querySelector('p').innerHTML=text;


//while loop
//In while loop we declare our index outside the of the loop.
// we increment the index in the loop.
// break stop completely but continue stops current loop and continue the loop.
//while is an entry control loop

// let i=0;
// while(i<10){
  
//   i++;
//   if(i===5)continue;
//   console.log(i);
 
// }


// const animals=['cat','dog','lion','tiger','owl'];


// let text='';
// let  x=0;
// while(x<animals.length){
//   text+=animals[x] + "<br>";
//   x++;
// }

// document.querySelector('p').innerHTML=text;

//Do while loop
//it will run atleast one time.
//it is exit control loop
// let i=0;
// do{
//   i++;
//   if(i===5)continue;
//   console.log(i);
// }
// while(i<10)



//foreach higher order array function

// const animals=['cat','dog','lion','tiger','owl'];
// animals.forEach(animal=>{
//   console.log(animal)
// })