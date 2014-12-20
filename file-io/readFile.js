/**
In this example, node will read the file you specified in the arguments and output its contents.

Example:
node --harmony readFile.js log.txt
**/

const
  fs=require("fs"),
  stream = fs.createReadStream(process.argv[2]);

stream.on("data",function(chunk){
  process.stdout.write(chunk);
});

stream.on("error", function(err){
  process.stderr.write("ERROR" + err.message + "\n");
});

stream.on("open", function(){
  console.log("Opening file for reading.");
});

stream.on("close", function(){
  console.log("Closed file.");
});
