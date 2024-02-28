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