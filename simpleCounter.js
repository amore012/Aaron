const fs = require('fs');
// import { readFileSync } from 'fs';
const arrow = require('apache-arrow');
// import { Table } from 'apache-arrow';

const arrowObj = fs.readFileSync('simple.arrow');
const table = arrow.Table.from([arrowObj]);

console.log(table.toString());