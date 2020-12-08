function findFactorialRecursive(number){
    //base case
    if(number === 1){
        return 1;
    }

    //recursive case
    return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number){
    let sum = 1;
    for(let i = number; i > 0; i--){
        sum *= i;
    }
    return sum;
}

console.log(findFactorialRecursive(5));
console.log(findFactorialIterative(5));