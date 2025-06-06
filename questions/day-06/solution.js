/**
 * 🧠 Day 06 - Move Zeros to the End
 * 
 * Problem:
 * Move all 0s to the end of the array without changing the order of other elements.
 * In-place solution required.
 * 
 * 💡 APPROACH:
 * Use a "Two-Phase" strategy with one pointer + iterator:
 * 1. First pass: Collect all non-zero elements at the front
 * 2. Second pass: Fill remaining positions with zeros
 * 
 * 🎯 KEY INSIGHT:
 * Instead of complex swapping, we "compact" non-zeros to the left,
 * then fill the right side with zeros. Simple and efficient!
 * 
 * ⏰ Time Complexity: O(n) - Single pass through array
 * 💾 Space Complexity: O(1) - In-place modification
 */

const moveZeros = (arr) => {
    /**
     * 🎯 PHASE 1: Collect all non-zero elements
     * 
     * Strategy: Use 'insertPos' as our "insertion pointer"
     * - It tracks WHERE the next non-zero element should be placed
     * - We iterate through the array and "pack" non-zeros to the front
     */
    let insertPos = 0; // Position where next non-zero should go
    
    // Scan entire array looking for non-zero elements
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            // Found non-zero: place it at current insertion position
            arr[insertPos] = arr[i];
            insertPos++; // Move insertion position forward
        }
        // Skip zeros - they'll be handled in Phase 2
    }
    
    /**
     * 🎯 PHASE 2: Fill remaining positions with zeros
     * 
     * At this point:
     * - All non-zeros are packed at positions [0...insertPos-1]
     * - Positions [insertPos...end] need to be filled with zeros
     */
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
