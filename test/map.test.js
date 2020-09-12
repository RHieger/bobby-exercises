import { fruitColors, cubes } from "../source/map";

describe("cubes", () => {

  it("returns the cube of the item in an array", () => {
    expect(cubes([ 1, 2, 3 ])).toEqual([ 1, 8, 27 ]);
  });
});

describe("fruitColors", () => {

  it("returns the colors of the fruits in the arrays", () => {
    expect(fruitColors([ "banana", "orange", "apple" ]))
      .toEqual([ "yellow", "orange", "red" ]);
  });
});

describe("simpleParseInt", () => {

  it("returns the integer value of the string", () => {
    expect(fruitColors("123")).toEqual(123);
  });
});
