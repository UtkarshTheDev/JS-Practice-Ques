/**
 * 🧠 Day 10 - Debounce Logic Implementation
 *
 * Used in: Search bars, APIs, animation throttles, performance controls
 */

const debounce = async (fn, timer) => {
    const startTime = new Date();
    let call = () => {
        console.log("Called CAll function");
        let gap = Math.round(new Date() - startTime);
        console.log(gap);
        setTimeout(fn, timer);
    };
    const debounced = call;
    return function (){
        
    };
};

// 🧪 Test
const log = debounce(() => {
    console.log("Debounced call fired!");
}, 1000);

log();
log();
log(); // only this should log after 1 second
