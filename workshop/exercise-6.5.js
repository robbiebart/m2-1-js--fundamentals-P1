// Q6.5
// Write a loop that will iterate from 0 to 15.
// For each iteration, it should check whether a number is even or odd
// and display that state along with the number.
// e.g.
// 0 is even
// 1 is odd
// 2 is even
// ...

// many other possibilities here.
for (let num = 0; num <= 15; num++) {
    if (num % 2 == 0) {
        console.log(`${num} is even`);
    } else (num % 2 !== 0)  
        console.log(`${num} is odd`);
} 

// after playing around for a while i can't see why this code calculates even numbers as even AND odd... seems like that's not what my code is saying