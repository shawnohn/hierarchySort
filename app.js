const fs = require('fs');
const sortCategoriesForInsert = require('./sortCategoriesForInsert.js');

const arg_json = process.argv[2];
const arg_out = process.argv[3];

fs.readFile(arg_json, 'utf8', (err, data) => {
  if (err) {
      console.log(`Can not read Input: ${err.message}`);
      process.exit;
    }
  var jsonInput = JSON.parse(data);
  
  var result = sortCategoriesForInsert(jsonInput);

  var jsonOutput = JSON.stringify(result);

  fs.writeFile(arg_out, jsonOutput, 'utf8', (err) => {
    if (err) {
      console.log(`Can not write JSON: ${err.message}`);
      process.exit;
    }
    console.log('JSON write end');
  });
});
