function findFactorialRecursive(number){
    if(number === 0) return 1;
    if(number < 0) return false;

    //base case
    if(number === 1){
        return 1;
    }

    //recursive case
    return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number){
    if(number === 0) return 1;
    if(number < 0) return false;

    let sum = 1;
    for(let i = number; i > 0; i--){
        sum *= i;
    }
    return sum;
}

console.log(findFactorialRecursive(-3));
console.log(findFactorialIterative(-3));