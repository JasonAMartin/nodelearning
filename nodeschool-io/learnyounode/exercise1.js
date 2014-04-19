/**
* LearnYouNode Lesson 01 (HELLO WORLD)
* JAM 4-17-2014
* Note for others: For this lesson, I could of just done console.log("HELLO WORLD"); as well, but I wanted to have some fun.
**/

console.log = function(txtOut) {
	process.stdout.write(txtOut + '\n');
};

console.log('HELLO WORLD');