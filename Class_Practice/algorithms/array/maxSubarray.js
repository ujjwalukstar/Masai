function maxSubArray(arr) {
    let maxSoFar = -Infinity;
    let maxEndingHere = 0;

    for (let i = 0; i < arr.length; i++) {
        maxEndingHere = maxEndingHere + arr[i];
        if (maxSoFar < maxEndingHere) {
            maxSoFar = maxEndingHere;
        }
        if (maxEndingHere < 0) {
            maxEndingHere = 0;
        }
    }
    return maxSoFar;
}

// Test cases
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6
console.log(maxSubArray([1])); // Output: 1
console.log(maxSubArray([5, 4, -1, 7, 8])); // Output: 23
