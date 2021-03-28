const quickSort = (array) => {
   if (array.length <= 1) {
        return array;
    }
    
    let i = 0;
    let rigth = [];
    let left = [];
    const pivot = array[array.length - 1];
    const n = array.slice(0, array.length - 1).length;

    while (i < n) {
        array[i] < pivot ? left.push(array[i++]) : rigth.push(array[i++]);
    }
    
    return [...quickSort(left), pivot, ...quickSort(rigth)];
}

const arrInput = [564345.12, 43, 32.5, 3, 52, 2399, 89, 12, 329, 51, 46, 10];

console.log('Input: ', arrInput);

console.log('Length: ', arrInput.length);

console.log('Output: ', quickSort(arrInput));