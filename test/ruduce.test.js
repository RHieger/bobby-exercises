import { coinTotal, cubes, mean, odds, sum } from "../source/reduce";

describe("sum", () => {

  it("returns the sum of the numbers", () => {

    expect(sum([ 0, 6, 5, 3, 8 ])).toEqual(22);
  });
});

describe("mean", () => {

  it("returns the mean of the numbers", () => {

    expect(mean([ 0, 6, 5, 3, 8 ])).toEqual(4.4);
  });
});

describe("coinTotal", () => {

  it("returns the total value of the coins", () => {

    expect(coinTotal([
      "nickle",
      "penny",
      "penny",
      "quarter",
      "nickle",
      "dime",
      "penny",
      "half dollar",
      "quarter",
      "nickle"
    ])).toEqual(128);
  });
});

describe("cubes", () => {

  it("returns the cube of the item in an array", () => {
    expect(cubes([ 1, 2, 3 ])).toEqual([ 1, 8, 27 ]);
  });
});

describe("odds", () => {

  it("only returns the odd numbers", () => {

    expect(odds([ 1, 1, 2, 3, 5, 8, 13, 21, 34 ]))
      .toEqual([ 1, 1, 3, 5, 13, 21 ]);
  });
});
