// Sum of values

// Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).
// const values = [3, 11, 7, 9, 10];

// for loop
 let values = [3, 11, 7, 2, 9, 10];
let sum = 0;
for(let i = 0; i < values.length; i++) {
    sum += values[i];
}

console.log(sum);

// forEach() method

const values2 = [3, 11, 7, 2, 9, 10];

let sum2 = 0;

values2.forEach(nums => {
    sum2 += nums;
});

console.log(sum2);


//reduce() method

const values3 = [3, 11, 7, 2, 9, 10];

let sum3 = values3.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
},0); 

console.log(sum3);