let column_1 = [];
let column_2 = [];
let column_3 = [];
let column_4 = [];
let sum_1 = 0;
let sum_2 = 0;
let sum_3 = 0;
let sum_4 = 0;
let final_sum = 0;

for (let i=0; i<30; i++) {
 column_1.push(Math.floor(Math.random()*10)+1)
 column_2.push(Math.floor(Math.random()*10)+1)
}

function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const rndInt = randomIntFromInterval(40, 100)

  for (let i=0; i<30; i++) {
    const rndInt = randomIntFromInterval(40, 100)
    column_3.push(rndInt)
    column_4.push(rndInt)
   }

for (let i=0; i<30; i++) {
 sum_1 = sum_1 + column_1[i];
 sum_2 = sum_2 + column_2[i];
 sum_3 = sum_3 + column_3[i];
 sum_4 = sum_4 + column_4[i];
}

final_sum = sum_1 + sum_2 + sum_3 + sum_4; 

console.log ("column 1:", column_1)
console.log ("column 2:", column_2)
console.log ("column 3:", column_3)
console.log ("column 4:", column_4) 
console.log("sum 1:", sum_1)
console.log("sum 1:", sum_2)
console.log("sum 1:", sum_3)
console.log("sum 1:", sum_4)
console.log ("final sum:", final_sum)