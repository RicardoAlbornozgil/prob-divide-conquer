function countZeroes(arr) {
    // Initialize left and right pointers
    let left = 0;
    let right = arr.length - 1; // Use arr.length instead of arr.length()
    let zeroes = 0; // Initialize zeroes count
    // Stops searching if left pointer is more than right
    while (left <= right) {
        const middle = Math.floor((left + right) / 2); // Correct Math.floor() spelling
        // Change left if middle is still 1.
        if (arr[middle] === 1) {
            left = middle + 1;
        } 
        // Change right if middle is 0 but not the first 0.
        else if (arr[middle] === 0 && (middle === 0 || arr[middle - 1] !== 0)) {
            right = middle - 1;
        }
        // Concluded that the middle is at the first 0 in the array.
        else {
            zeroes = arr.length - middle;
            return zeroes;
        }
    }
    return zeroes;
}

module.exports = countZeroes;