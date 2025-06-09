/**
 * 🧠 Day 09 - Deep Clone Without JSON.parse
 *
 * Pattern: Recursion + Type Detection
 * Used In: App state mgmt, rollback, backup, undo/redo
 */

const deepClone = (obj) => {
    if (obj === null || typeof obj !== "object") return obj;

    if (obj instanceof Date) return new Date(obj);

    if (Array.isArray(obj)) {
        return obj.map((item) => deepClone(item));
    }

    const clone = {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]);
        }
    }
    return clone;
};

// 🧪 Test
const original = {
    name: "Utkarsh",
    age: 15,
    tech: ["JS", "React"],
    meta: {
        joined: new Date(),
    },
};

const copied = deepClone(original);
console.log(copied);
