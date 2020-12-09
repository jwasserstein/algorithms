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

function insertionSort(nums){
    const arr = nums.slice();
    for(let currentIdx = 1; currentIdx < arr.length; currentIdx++){
        if(arr[currentIdx] < arr[currentIdx - 1]){
            let sortIdx = currentIdx - 1;
            while(sortIdx >= 0 && arr[currentIdx] < arr[sortIdx]){
                sortIdx--;
            }
            arr.splice(sortIdx + 1, 0, arr[currentIdx]);  
            arr.splice(currentIdx + 1, 1);                
        }
    }
    return arr;
}

function insertionSortSwap(nums){ // faster to just swap than insert/delete
    const arr = nums.slice();
    for(let currentIdx = 1; currentIdx < arr.length; currentIdx++){
        if(arr[currentIdx] < arr[currentIdx - 1]){
            let b = currentIdx;
            let a = currentIdx - 1;
            while(a >= 0 && arr[b] < arr[a]){
                [arr[a], arr[b]] = [arr[b], arr[a]];
                a--;
                b--;
            }
        }
    }
    return arr;
}

function mergeSort(nums){
    if(nums.length < 2) return nums;

    const firstHalf = nums.slice(0, Math.floor(nums.length/2));
    const secondHalf = nums.slice(Math.floor(nums.length/2));
    
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(arr1, arr2){
    let idx1 = 0;
    let idx2 = 0;
    const mergedArr = [];
    while(idx1 + idx2 < arr1.length + arr2.length){  // break this out into a merge function
        if(arr2[idx2] === undefined){
            mergedArr.push(arr1[idx1]);
            idx1++;
        } else if (arr1[idx1] === undefined){
            mergedArr.push(arr2[idx2]);
            idx2++;
        } else if (arr1[idx1] < arr2[idx2]){
            mergedArr.push(arr1[idx1]);
            idx1++;
        } else {
            mergedArr.push(arr2[idx2]);
            idx2++;
        }
    }
    return mergedArr;
}

function quickSort(nums){
    if(nums.length < 2){
        return nums;
    }

    const arr = nums.slice();
    let pivot = arr.length - 1;
    for(let i = pivot - 1; i >= 0; i--){
        if(arr[i] > arr[pivot]){
            [arr[i], arr[pivot - 1]] = [arr[pivot - 1], arr[i]];
            [arr[pivot - 1], arr[pivot]] = [arr[pivot], arr[pivot - 1]];
            pivot--;
        }
    }
    const first = arr.slice(0, pivot);
    const second = arr.slice(pivot + 1);
    return quickSort(first).concat([arr[pivot]], quickSort(second));
}

console.time('generation');
const bigArr = Array(2000000).fill(0).map(() => Math.floor(Math.random()*1000));
console.timeEnd('generation');

console.time('merge');
mergeSort(bigArr);
console.timeEnd('merge');

console.time('quick');
quickSort(bigArr);
console.timeEnd('quick');