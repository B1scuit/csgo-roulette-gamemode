const fs = require('fs');
var config = fs.readFileSync("config.json");
var data2 = JSON.parse(config);
var data;
function dirload(dir) {

  var files = fs.readdirSync(dir)

  var MapNo = Math.floor(Math.random() * files.length);
  var fsdata;

  var fsdata = fs.readFileSync(dir + files[MapNo]), fsdata;
  return JSON.parse(fsdata);
}

function arraySort(val, index, arr){
	var key = val.split(" ");
	if(key[1] != null){
		configFile[key[0]] = key[1];
	} else {
		configFile[key[0]] = "";
	}
}

function arrayMerge(val, index){
	configFile[index] = val;
}

// load the configs
var configFile = [];

var mode = dirload('modes/');
var modeCmd = mode.cmd
modeCmd.forEach(arraySort);
console.log(mode.name)

for(var i = 0;i < 4; i++){
	data = dirload('tumblers/');
	var rand = dirload('tumblers/').cmd
	rand.forEach(arraySort);
	console.log(data.name)
}

// Add anything else we need 
configFile["mp_restartgame"] = "1";

var file = fs.createWriteStream(data2.csgoConfigDir + "/csgo/cfg/rouletteGame.cfg");
file.on('error', function(err) { console.log(err) });

var str;
for (var k in configFile){
    if (configFile.hasOwnProperty(k)) {
        file.write(k + " " + configFile[k]+ '\n');
    }
}

file.end();

console.log("\nPlease type \"exec rouletteGame\" in your session");


