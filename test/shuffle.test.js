import { shuffle } from "../src/shuffle.js";
import { assert } from "chai";
import { describe, it } from "mocha";

describe("Verifies shuffle functionality", () => {
  it("Verifies that the shuffle function shuffles the indexes of an array", () => {
    const numArray = [1, 2, 3, 4, 5, 6];
    const shuffledArray = shuffle(numArray);

    // Ensure it's a new array (not same reference)
    assert.notStrictEqual(shuffledArray, numArray);

    // Ensure same elements exist
    assert.sameMembers(shuffledArray, numArray);

    // Ensure order is different
    assert.notDeepEqual(shuffledArray, numArray);
  });
});
