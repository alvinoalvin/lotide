const assert = require('chai').assert;
const tail = require('../tail');


const words = ["Yo Yo", "Lighthouse", "Labs"];

describe("#tail", () => {
  it(`returns ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]`, () => {
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });

  it(`returns length of 3 after run (original not modified)`, () => {
    assert.deepEqual(words.length, 3);
  });
});