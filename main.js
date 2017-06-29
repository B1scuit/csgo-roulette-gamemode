const fs = require('fs');

var config = fs.readFileSync("config.json");
var data = data = JSON.parse(config);

function dirload(dir) {

  var files = fs.readdirSync(dir)

  var MapNo = Math.floor(Math.random() * files.length);
  var fsdata;

  var fsdata = fs.readFileSync(dir + files[MapNo]), fsdata;
  return JSON.parse(fsdata);
}

data["map"] = dirload('maps/');
data["mode"] = dirload('modes/');

data["blessings"] = [];
data["curses"] = [];

for(var i=1; i <= data.blessings; i++) {
  data["blessings"][i] = dirload('blessings/');
}

for(var i=1; i <= data.curses; i++) {
  data["curses"][i] = dirload('curses/');
}

console.log(data);

cmd = data["map"].cmd.join('\n');
