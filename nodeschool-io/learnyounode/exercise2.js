/**
* LearnYouNode Lesson 02 (BABY STEPS)
* JAM 4-17-2014
* Note: Wasn't required, but I added Number/NaN scrubbing for data input as 'whatever.js 1 2 3 b 4' would cause script to fail. I think they should of added this requirement to this lesson.
* Note 2: Additionally, this code could be condensed. I'm not concerned with being 'tight' with my code for these lessons.
**/

var finalCount=0;
var scrubData=0;
for(var i=2; i<process.argv.length; i++) {
	scrubData = Number(process.argv[i]);
	if(!isNaN(scrubData)) finalCount += scrubData;
}
console.log(finalCount);
