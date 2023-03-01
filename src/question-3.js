function mySort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...mySort(left), pivot, ...mySort(right)];
}

// Here, mySort() is a recursive function that takes an array arr and returns a sorted version of it.The base case is when arr has length 0 or 1, in which case it is already sorted.

// The algorithm works by choosing the first element of arr as the pivot, and then splitting the remaining elements into two 
// arrays: left, which contains all elements less than the pivot, and right, which contains all elements greater than or equal to the pivot.
// It then recursively sorts left and right, and returns the concatenation of the sorted left, the pivot, and the sorted right.

// To use this sorting function to sort an array of integers from lowest to highest, you can simply call it like this:

const arr = [4, 2, 7, 1, 3, 6, 5];
const sortedArr = mySort(arr);
console.log(sortedArr); // Output: [1, 2, 3, 4, 5, 6, 7]