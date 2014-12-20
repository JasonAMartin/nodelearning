Node Learning
=============

This repo is just random commits by me to help others discover Node.

For organization I'm putting each little segment in its own folder (example: file-watcher) so that it's easier for people to go straight into the thing they're interested in.

My dev box is Linux-based, but that largely shouldn't matter. Also, I run node with the --harmony flag, which enables me to use future JS additions (ES6).

While I do tend to run a future version of Node, so I can play with generators, for these examples, I worked to not include anything out of the ordinary, so that they will work with the current version of Node everyone is using (with the --harmony flag).

**Note:** As with any code, things can usually be done various ways. My goal with this repo is to simply instruct people to get them going with Node. I encourage you to explore ways to do things better for your situation. Have fun!

## Forking

Please feel free to fork/star this repo and modify the items with your own versions. Let's spread the Node love!

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
