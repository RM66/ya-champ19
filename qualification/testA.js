const doo = require("./A");

const data1 = { a: 9128, replace: x => [8, 8, 8, 5, 7, 6, 7, 1, 7, 0][x] };
const data2 = { a: 33, replace: x => [0, 1, 1, 1, 1, 1, 1, 1, 1, 1][x] };

console.log(doo(data1)); // 128
console.log(doo(data2)); // 11
