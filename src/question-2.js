function printFigure(n) {
    // Iterate through each row
    for (let i = 0; i < n; i++) {
        let row = '';
        // Add the appropriate number of dashes to the row
        for (let j = 0; j < n - i - 1; j++) {
            row += '-';
        }
        // Add the appropriate number of asterisks to the row
        for (let j = 0; j <= i; j++) {
            row += '*';
        }
        // Print the completed row
        console.log(row);
    }
}


// The printFigure function takes an integer n as input and prints the corresponding figure using dashes and asterisks.It uses two nested loops to iterate through each row of the figure,
//  and within each row, it adds the appropriate number of dashes and asterisks to create the desired pattern.Finally, it prints each completed row to the console.

// You can test the function with the sample inputs provided in the problem statement by calling the function with printFigure(5) and printFigure(7).