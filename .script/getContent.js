const fs = require('fs');
const path = require('path');
const { argv } = require('process');

const filePaths = argv.slice(2);

console.log(filePaths);