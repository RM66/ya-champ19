const doo = require("./B");

const data1 = "/sails-111/333_ball?a=1&b=2";
const data2 = "/projectName-subproject/entityName?a=1&b=2";

console.log(doo(data1)); // /sails/111/ball/333?a=1&b=2
console.log(doo(data2)); // /projectName/subproject/entityName?a=1&b=2
