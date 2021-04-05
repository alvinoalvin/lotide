// test/assertEqualTest.js

const assertEqual = require('../assertEqual');


// TEST CODE
assertEqual("Chipmunk", "Chipmunk");
console.log("testing fail");
assertEqual("Lighthouse Labs", "Bootcamp"); //should fail
assertEqual(1, 1);
assertEqual(1, 2);