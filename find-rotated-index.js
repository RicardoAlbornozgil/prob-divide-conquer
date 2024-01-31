function findRotatedIndex(arr, num) {
    function findPivot(arr) {
        let left = 0;
        let right = arr.length - 1;
        
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] > arr[mid + 1]) {
                return mid + 1;
            }
            if (arr[mid] < arr[left]) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return 0;
    }
    
    function binarySearch(arr, left, right, num) {
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] === num) {
                return mid;
            } else if (arr[mid] < num) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    }
    
    const pivot = findPivot(arr);
    if (pivot === 0) {
        return binarySearch(arr, 0, arr.length - 1, num);
    }
    if (arr[0] <= num) {
        return binarySearch(arr, 0, pivot - 1, num);
    } else {
        return binarySearch(arr, pivot, arr.length - 1, num);
    }
}

module.exports = findRotatedIndex