/**
* 🧠 Day 06 - Move Zeros to the End
 * 
 * Problem:
 * Move all 0s to the end of the array without changing the order of other elements.
 * In-place solution required.
 */

const moveZeros = (arr)=>{
    let pointer1 = 0

    for(let i=0;i<arr.length;i++){
        if(arr[i] !== 0){
            arr[pointer1] = arr[i]
            pointer1++
        }
    }

    for(let i=pointer1;i<arr.length;i++){
        arr[i] = 0
    }
    return arr
}

// 🧪 Test Cases
let arr1 = [0, 1, 0, 3, 12];
moveZeros(arr1);
console.log(arr1);  // [1, 3, 12, 0, 0]

let arr2 = [1, 2, 3, 0, 0];
moveZeros(arr2);
console.log(arr2);  // [1, 2, 3, 0, 0]

let arr3 = [0, 0, 0];
moveZeros(arr3);
console.log(arr3);  // [0, 0, 0]

let arr4 = [];
moveZeros(arr4);
console.log(arr4);  // []
