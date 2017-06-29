const fs = require('fs');

var data = {

};

var config = fs.readFileSync("config.json");
data = JSON.parse(config);

function dirload(dir) {

  var files = fs.readdirSync(dir)

  var MapNo = Math.floor(Math.random() * files.length);
  var fsdata;

  var fsdata = fs.readFileSync(dir + files[MapNo]), fsdata;
  return JSON.parse(fsdata);
}

// Get config info

data["map"] = dirload('maps/');
data["mode"] = dirload('modes/');

data["blessings"] = [];
data["curses"] = [];

for(var i; i< data.blessings; i++) {
  data["blessings"][i] = dirload('blessings/');
}

for(var i; i< data.curses; i++) {
  data["curses"][i] = dirload('curses/');
}

console.log(data);

cmd = data["map"].cmd.join('\n');
