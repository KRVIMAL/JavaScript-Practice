function multiplyBY2(x){
  return x*2;
}

function addBy2(y){
  return y+2;
}

function calculate(data,func){
  const output=[];
  data.forEach(element => {
    output.push(func(element))
  });
  return output;
}
Rk175987440

const numbers=[1,2,3,4,5];

console.log(calculate(numbers,multiplyBY2));
console.log(calculate(numbers,addBy2));