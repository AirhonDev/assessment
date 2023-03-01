function printNumbersWithConditions(n) {
    for (let i = 1; i <= n; i++) {
        let output = "";

        if (i % 5 === 0) {
            output += "Knose";
        }

        if (i % 7 === 0) {
            output += "Pet Care Made Easy";
        }

        console.log(output || i);
    }
}


// This code works as follows:

// 1. It initializes the variable n to 35.
// 2. It uses a for loop to iterate from 1 to n.
// 3. For each number i, it initializes an empty string output.
// 4. If i is divisible by 5, it appends the string "Knose" to output.
// 5. If i is divisible by 7, it appends the string "Pet Care Made Easy" to output.
// 6. If output is still an empty string(i.e., i is not
//      divisible by 5 or 7), it prints the value of i.
// 7. Otherwise, it prints the contents of output.
// Note that in JavaScript, an empty string is considered a falsy value, so if output is still empty after the two if statements, the expression output || i evaluates to i and is printed.