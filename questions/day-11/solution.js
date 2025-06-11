/**
 * 🧠 Day 11 - EventEmitter Class
 *
 * Real World: Node.js, React events, Pub/Sub, game engines
 */

class EventEmitter {
    constructor() {
        this.events = new Map();
    }

    on(event, callback) {
        if (!this.events.has(event)) {
            this.events.set(event, [callback]);
        } else {
            this.events.get(event).push(callback);
        }
    }

    emit(event, msg) {
        for (let i = 0; i < this.events.get(event).length; i++) {
            const fn = this.events.get(event)[i];
            fn(msg);
        }
    }

    off(event, callback) {
        if (!this.events.has(event)) console.log("Event does not exist");

        if (!this.events.get(event).includes(callback))
            console.log("Function Does not exist");

        const indexOfCallback = this.events.get(event).indexOf(callback);
        this.events.get(event).splice(indexOfCallback, 1);
    }

    once(event, callback) {
        this.on(event, callback);
        this.emit(event, "Hello");
        this.off(event, callback);
    }
}

// 🧪 Test
const emitter = new EventEmitter();

const log = (msg) => console.log(msg);

emitter.on("greet", log);
emitter.emit("greet", "Hello"); // Hello
emitter.off("greet", log);
emitter.emit("greet", "World"); // (no output)

emitter.once("ping", () => console.log("PONG"));
emitter.emit("ping"); // PONG
emitter.emit("ping"); // (no output)
