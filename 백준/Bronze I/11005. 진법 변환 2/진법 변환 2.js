const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

console.log(input[0].toString(input[1]).toUpperCase());