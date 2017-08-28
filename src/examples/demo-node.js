var fs = require('fs')
var midiParser  = require('./midi-parser.js');

console.log("Reading ./test.mid as base64...")
fs.readFile('./test.mid', 'base64', function (err,data) {
  if (err) throw new Error(err);
  console.log("Done!");
  console.log("Converting base64 string to structured Array...")
  var midiArray = midiParser.parse(data);
  console.log("Done!");
  console.log(midiArray);
});



