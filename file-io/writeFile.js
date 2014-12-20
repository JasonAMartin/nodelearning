/**
This is one way to write data to a file with Node. It will work fine for smaller items, but if you had a large amount of data, you'd want to use a stream instead.

Also in this example, Node won't append the data, so it's a complete re-write. If you want to append a file instead, just replace writeFile with appendFile.

NOTE: If you want the synchronous version of this, you'd replace writeFile with writeFileSync (and appendFileSync for the synchronous version of that).

Example:
node --harmony writeFile.js
**/

const
  fs = require("fs"),
  fileData = "This is my sample text that I want written to a file.\n",
  fileName = "writeFileDemo.txt";

fs.writeFile(fileName,fileData,function(err){
  if(err){
    throw err;
  }

  console.log("Done saving your data to: " + fileName);
});
