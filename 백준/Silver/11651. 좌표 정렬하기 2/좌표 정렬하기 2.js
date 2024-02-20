const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let coordinates = [];
let string = [];

for(let i = 1; i < input.length; i++){
    const [a,b] = input[i].split(" ");
    coordinates.push({
        x : parseInt(a),
        y : parseInt(b),
    });
}

coordinates.sort((a, b) => a.y - b.y === 0 ? a.x-b.x : a.y - b.y);

for(let i = 0; i < coordinates.length; i++){
    string.push(coordinates[i].x + " " + coordinates[i].y);
}
console.log(string.join("\n"));