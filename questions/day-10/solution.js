/**
 * 🧠 Day 10 - Debounce Logic Implementation
 *
 * Used in: Search bars, APIs, animation throttles, performance controls
 */

const debounce = async (fn, timer) => {
    const startTime = new Date();
    let call = () => {
        console.log("Called CAll function");
        let gap = Math.round(
            new Date().getMilliseconds() - startTime.getMilliseconds(),
        );
        console.log(gap);
        if (gap == timer) {
            return fn;
        }
    };
    setInterval(call, 1000);
    return fn;
};

// 🧪 Test
const log = debounce(() => {
    console.log("Debounced call fired!");
}, 1000);

log();
log();
log(); // only this should log after 1 second
