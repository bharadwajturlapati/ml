'use strict';

const fs = require('fs');
const readData =  function(filePath){
    let rawdata = fs.readFileSync(filePath);
    return JSON.parse(rawdata);
};

// these must be last.
const utils = {
    "readFile" : readData
}
module.exports=utils;