/**
This example demonstrates how you can easily do clustering in Node.

This script will create 10 workers. Master will announce each worker. Each worker will announce itself and exit. The master will announce when each worker goes offline.

This is a really basic example of cluster/fork, but it should get the ideas flowing.

usage: node --harmony cluster-fork-basics.js

**/

"use strict"

const
  cluster = require('cluster'),
  totalWorkers = 10;

if(cluster.isMaster) {
  //It's the master

  //let's point out that our worker bees are flying
  cluster.on('online', function(worker){
    console.log("Worker " + worker.process.pid + " is online.");
  });

  //let's point out when a worker dies
  cluster.on('exit', function(worker, code, signal){
    console.log("Worker " + worker.process.pid + " has went offline.");
  });

  //let's make some forks
  for(let i=0; i<totalWorkers; i++){
    cluster.fork();
  }

}else{
  //this isn't the master, it's a worker fork, so do something.
  console.log("Hello, I'm a worker. My process is: " + process.pid);
  //let's dump this worker now.
  process.kill(process.pid);
}
