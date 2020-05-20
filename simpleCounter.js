const fs = require('fs');
const arrow = require ('apache-arrow');

const arrowtable = fs.readFileSync('simple.json');
const table = arrow.Table.from(arrowtable);

console.log(table);
