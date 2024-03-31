/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    let sum =0;
    for(let i =1;i<=n;i++){
        sum+=i;
    }
}


let start2 = Date.now();
calculateTime(100);
let timeTaken2 = Date.now() - start2;
console.log("Total time taken for 100: " + timeTaken2 + " milliseconds");


let start1 = Date.now();
calculateTime(100000);
let timeTaken1 = Date.now() - start1;
console.log("Total time taken for 100000: " + timeTaken1 + " milliseconds");

let start3 = Date.now();
calculateTime(1000000000);
let timeTaken3 = Date.now() - start3;
console.log("Total time taken for 1000000000: " + timeTaken3 + " milliseconds");

