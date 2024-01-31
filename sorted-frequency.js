function sortedFrequency(arr, val) {
    return findFrequency(arr, val, 0, arr.length() - 1)
}

function findFrequency(arr, val, left, right) {
    // Base case: not found.
    if (left > right) {
        return -1;
    }

    const middle = Math.floor((left + right) / 2);

    // Find Leftmost
    if (arr[middle] < val) {
        return findFrequency(arr, val, middle + 1, right);
    }

    // Find Rightmost
    else if (arr[middle] > val) {
        return findFrequency(arr, val, left, middle - 1);
    }
    else {
        const leftMost = findFrequency(arr, val, left, middle - 1)
        const rightMost = findFrequency(arr, val, middle + 1, right)
        return leftmost + rightmost + 1; //Include middle occurrence.
    }
}

module.exports = sortedFrequency