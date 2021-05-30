const performance = require('perf_hooks').performance;

const quickSort = (array) => {

   if (array.length <= 1) {
        return array;
    }
    
    let i = 0;

    let right = [];

    let left = [];

    const pivot = array[array.length - 1];

    const n = array.length - 1;

    while (i < n) {
        array[i] < pivot ? left.push(array[i++]) : right.push(array[i++]);
    }
    
    return [...quickSort(left), pivot, ...quickSort(right)];
}

const arrInput = [
	564345.12, 43, 32.5, 3, 52, 
	0.23, 2399, 89, 12, 329, 51, 46, 10];

console.log('Length: ', arrInput.length);

console.log('Input: ', arrInput);

const t0 = performance.now();

const res = quickSort(arrInput);

const t1 = performance.now();

console.log(`quickSort call took: ` + (t1 - t0) + " milliseconds.")

console.log('Output: ', res);