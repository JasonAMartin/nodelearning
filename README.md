Node Learning
=============

This repo is random commits by me to help others discover the joy that is Node.

My dev box is Linux-based, but that largely shouldn't matter. Also, I run node with the --harmony flag, which enables me to use future JS additions (ES6).

While I do tend to run a future version of Node so I can play with generators, these examples should work with the current stable version of Node with the --harmony flag.

**Note:** As with any code, things can usually be done various ways. My goal with this repo is to simply instruct people to get them going with Node. I encourage you to explore ways to do things better for your situation. Have fun!

## Forking

Please feel free to fork/star this repo and modify the items with your own versions. Let's spread the Node love!

## Run Example

One way to run the scripts is by using your terminal. Once you've navigated to the directory containing the script you want to write, you'd just run a command like this: node --harmony fileWatcher02.js log.txt

The above command will run the script fileWatcher02.js with Node in harmony mode and pass it in an argument of log.txt, which happens to be the file this script will watch.


## Some Useful Links:

[Node API] (http://nodejs.org/api/)

[NPM] (https://www.npmjs.com/)

[NodeSchool.io] (http://nodeschool.io/)

## Some Useful Terminal Commands:

node -v == This will show you the version of Node you're using.

npm init == This will help you create a package.json file for your project. It's a great first step.

npm install Hapi == This will install the node module Hapi locally

npm install Hapi -g == This will install the node module Hapi globally

npm install Hapi --save == This will install the node module Hapi locally into your project and save it as a dependency in your package.json

npm install Hapi --save-dev == Same as --save except it saves it as a dev dependency in your project

npm uninstall Hapi -- Removes Hapi

npm update == Run this in the directory of your package.json and it will update your dependency packages
