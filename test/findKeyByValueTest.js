const findKeyByValue = require("../findKeyByValue");
const assert = require("chai").assert;


describe("#findKeyByValue", () => {
    
  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire",
    anime: "One Piece"
  };

  it(`returns "drama" for findKeyByValue(bestTVShowsByGenre, "The Wire")`, () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it(`returns undefined for findKeyByValue(bestTVShowsByGenre, "That '70s Show")`, () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

  it(`returns "comedy" for findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine")`, () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
  });

  it(`returns "anime" for findKeyByValue(bestTVShowsByGenre, "One Piece")`, () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "One Piece"), "anime");
  });
});