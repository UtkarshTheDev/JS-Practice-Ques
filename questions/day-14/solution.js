// 🚀 Day 14 – Throttle Function Implementation

const throttle = (fn,delay)=>{
    let last = 0

    return function (...args) {
        const now = Date.now()
        if (now - last >= delay){
            last = Date.now()
             fn.apply(this, args);
        }
    }
}

const throttledLog = throttle(() => {
  console.log('Called at', Date.now());
}, 2000);

// Simulate rapid calls
throttledLog();
throttledLog();
throttledLog();

setTimeout(throttledLog, 2200); // This one should fire