/**
 * Created by JAM on 4/16/2014.
 * Written originally on Linux machine with *Nix filesystem in mind.
 */

//file watcher v3 with child process and parsing
//run with --harmony flag

"use strict";

const
    fs = require('fs'),
    spawn = require('child_process').spawn,
    filename = process.argv[2];

if(!filename) {
    throw Error("Please enter a file to watch.");
}

fs.watch(filename, function(){
    let
        ls = spawn('ls', ['-lh', filename]),
        output = '';

    ls.stdout.on('data',function(chunk){
        output += chunk.toString();
    });

ls.on('close', function(){
    let parts = output.split(/\s+/);
    console.dir([parts[0], parts[4], parts[8]]);
    });
});