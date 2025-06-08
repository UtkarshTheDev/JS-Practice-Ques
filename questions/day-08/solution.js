/**
 * 🧠 Day 08 - Most Frequent Element in Array
 * 
 * Pattern: Frequency Counter
 * Use case: Logging, caching, search optimization
 */

const mostFrequentElement = (arr)=>{
    if (!arr.length) return null
    let majority= arr[0]
    let freq = 1

    for(let i = 0; i<arr.length; i++){
        if (freq === 0){
            majority= arr[i]
        }
        if (arr[i] === majority)freq++
        if (arr[i] !== majority)freq--
    }
    return majority;
}

// 🧪 Test Cases
console.log(mostFrequentElement([1, 3, 2, 1, 4, 1, 3, 3, 3])); // 3
console.log(mostFrequentElement([4, 4, 4, 5, 5, 5, 6]));       // 4
console.log(mostFrequentElement([1,1 ,2, 3, 4]));                // 1
console.log(mostFrequentElement([]));                         // null
