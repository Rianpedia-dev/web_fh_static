import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

console.log("nextVitals type:", typeof nextVitals);
console.log("is nextVitals iterable?:", typeof nextVitals?.[Symbol.iterator] === 'function');
console.log("nextVitals keys:", Object.keys(nextVitals || {}));
if (nextVitals?.default) {
    console.log("nextVitals.default type:", typeof nextVitals.default);
    console.log("is nextVitals.default iterable?:", typeof nextVitals.default?.[Symbol.iterator] === 'function');
}
