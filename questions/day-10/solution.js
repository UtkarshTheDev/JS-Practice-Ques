/**
 * 🧠 Day 10 - Debounce Logic Implementation
 *
 * Used in: Search bars, APIs, animation throttles, performance controls
 */

const debounce = (fn, delay) => {
    let timer = null;

    return function () {
        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(() => {
            fn();
        }, delay);
    };
};

// 🧪 Test
const log = debounce(() => {
    console.log("Debounced call fired!");
}, 1000);

log(); // Called
log(); // Called (cancels previous)
log(); // Called (cancels previous) - Only this one should actually fire after 1 second
