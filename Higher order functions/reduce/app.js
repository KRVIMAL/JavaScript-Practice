// const numbers=[1,2,3,4,5];
// const sum=numbers.reduce((acc,index)=>acc+index,0);

// console.log(sum);

const employees=[
  {id:101,name:'john',profile:"Senior Developer", rating1:5, rating2:10},
  {id:102,name:'doe',profile:"junior Developer", rating1:2, rating2:10},
  {id:103,name:'mike',profile:"Senior Developer", rating1:8, rating2:10}
]

const experiencedDevelopers=employees.filter(employe=>employe.profile==="Senior Developer");
console.log(experiencedDevelopers);

const totalRating=experiencedDevelopers.map(employe=>employe.rating1+employe.rating2);
console.log(totalRating);

console.log(totalRating.reduce((acc,rating)=>acc+rating,0)
);