/**
This is a simple example of extending core classes with node modules.

This file is used by usingModule.js in this directory and shouldn't be run.

This module extends fs.createReadStream and just adds a simple line before showing the output.
**/

"use strict"

const
  fs = require("fs"),
  util = require("util"),

//client constructor
  CustomOpen = function(filename){
   let
    stream = fs.createReadStream(filename);

   self.on("data", function(chunk){
      process.stdout.write("Simple read file extension example: \n" + chunk);
    });
  };

//LDJClient will inherit from EventEmitter
util.inherits(CustomOpen, fs.createReadStream);

//expose module methods

exports.CustomOpen = CustomOpen;
exports.display = function(filename){
  return new CustomOpen(filename);
};
