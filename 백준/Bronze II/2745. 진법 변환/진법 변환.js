const fs = require("fs");
const input = fs.readFileSync(0).toString().split(" ");

console.log(parseInt(input[0], Number(input[1])));