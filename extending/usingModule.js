/**
In this basic example, we're using a cusom node module called "simple-extension-module.js"

I require it and assign it to customOpen. In readFile, I pass the filename to the method "display" of the module.

The end result is us seeing the contents of the file as you would normally with fs.createReadStream, but with a customization to it.

Really basic, but it should get the wheels turning.

Use:

node --harmony usingModule.js sample.txt

**/

"use strict"

const
customOpen = require("./simple-extension-module.js"),
filename = process.argv[2],
readFile = customOpen.display(filename);
