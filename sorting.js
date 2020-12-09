const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(nums){
    const arr = nums.slice();
    let lengthToSort = arr.length;
    let firstIdx = 0;
    let secondIdx = 1;
    while(lengthToSort > 0){
        while(secondIdx < lengthToSort){
            if(arr[firstIdx] > arr[secondIdx]){
                [arr[firstIdx], arr[secondIdx]] = [arr[secondIdx], arr[firstIdx]];
            }
            firstIdx++;
            secondIdx++;
        }
        lengthToSort--;
        firstIdx = 0;
        secondIdx = 1;
    }
    return arr;
}

function selectionSort(nums){
    const arr = nums.slice();
    let smallestIdx = 0;
    let startingIdx = 0;
    while(startingIdx < arr.length - 1){
        for(let i = startingIdx; i < arr.length; i++){
            if(arr[i] < arr[smallestIdx]){
                smallestIdx = i;
            }
        }
        [arr[startingIdx], arr[smallestIdx]] = [arr[smallestIdx], arr[startingIdx]];
        startingIdx++;
        smallestIdx = startingIdx;
    }
    return arr;
}

console.log(selectionSort(numbers));
