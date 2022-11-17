function pascalCase(str){
    let capitalizeString=(str)=>str[0].toUpperCase()+str.slice(1).toLowerCase();
    let capitalizeWord=str.split(' ').map(capitalizeString).join("");
  let cc= capitalizeWord.split("")[0].toLowerCase()+capitalizeWord.slice(1);
  return cc;
}



let text="vimal kumar pal";

console.log(pascalCase(text));




















































































































// let snakeCase=str.split().join();
// console.log(snakeCase);

// let screamKebabCase=(str.replaceAll(" ","-")).toUpperCase();
// console.log(screamKebabCase);
// let i=0;
// while(i<=str.length){
//   let snakeCase=str.replace(String.fromCharCode(32),"_");
//   i++;
//   return snakeCase;
// }

// console.log(snakeCase);


