// EX 004

const a = 10;
const b = 60;

console.log(a > b && b == a);
console.log(a < b || b == a);
console.log((a != b && b == a) || (b == a && (a < b || b == a)) || (!a && !b));
