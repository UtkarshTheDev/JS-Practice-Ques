/**
 * 🧠 Day 06 - Move Zeros to the End
 * 
 * Problem:
 * Move all 0s to the end of the array without changing the order of other elements.
 * In-place solution required.
 * 
 * 💭 THOUGHT PROCESS:
 * - Need to preserve order of non-zero elements (stable partitioning)
 * - In-place means O(1) extra space, can't create new array
 * - Could swap elements but that's complex and unnecessary
 * - Better approach: "compact" non-zeros to front, then fill zeros at end
 * - This is essentially a two-phase process
 * 
 * 💡 APPROACH:
 * Two-Phase Strategy with insertion pointer:
 * 1. First pass: Move all non-zeros to front of array
 * 2. Second pass: Fill remaining positions with zeros
 * 
 * 🎯 KEY INSIGHT:
 * Use an "insertPos" pointer to track where the next non-zero should go.
 * This avoids complex swapping logic and keeps solution simple.
 * 
 * ⏰ Time Complexity: O(n) - Two passes through array
 * 💾 Space Complexity: O(1) - Only using one extra variable
 */

const moveZeros = (arr) => {
    let insertPos = 0; // Tracks where next non-zero element should be placed
    
    // Phase 1: Collect all non-zero elements at the front
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[insertPos] = arr[i];
            insertPos++;
        }
    }
    
    // Phase 2: Fill remaining positions with zeros
    for (let i = insertPos; i < arr.length; i++) {
        arr[i] = 0;
    }
    
    return arr;
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
