//Assignment 1

function fibs(n) {
    if (n === 0) return []; 
    if (n === 1) return [0]; 

    const sequence = [0, 1]; 

    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence; 
}

function fibsRec(n) {
    if (n === 0) return []; 
    if (n === 1) return [0]; 
    if (n === 2) return [0, 1]; 
    
    let sequence = fibsRec(n - 1); 
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]); 
    return sequence; 
}


//Assignemnt 2
function mergeSort(array) {
    if (array.length === 0) console.log('please enter a non-empty array!');
    if (array.length === 1) return array; 

    const mid = Math.floor(array.length / 2)
    const leftHalf = array.slice(0, mid);
    const rightHalf = array.slice(mid, array.length);

    return merge(mergeSort(leftHalf), mergeSort(rightHalf)); 
}

function merge(left, right) {
    const mergedArray = []; 
    
    while (left.length > 0 && right.length > 0) {
        const arrayWithMin = left[0] < right[0] ? left : right; 
        const mergeElement = arrayWithMin.shift(); 
        mergedArray.push(mergeElement);
    }

    return mergedArray.concat(left, right);
}