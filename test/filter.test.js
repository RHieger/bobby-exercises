import { noPickles, odds, redFruits } from "../source/filter";

describe("odds", () => {

  it("only returns the odd numbers", () => {

    expect(odds([ 1, 1, 2, 3, 5, 8, 13, 21, 34 ]))
      .toEqual([ 1, 1, 3, 5, 13, 21 ]);
  });
});

describe("noPickles", () => {

  it("gets rid of pickles because they're terrible", () => {

    expect(noPickles([
      "ground beef",
      "tomato",
      "pickled tomatoes",
      "lettuce",
      "cheddar",
      "pickles",
      "onion",
      "pickled onions",
      "pineapple",
      "egg",
      "pickling jam"
    ])).toEqual([
      "ground beef",
      "tomato",
      "lettuce",
      "cheddar",
      "onion",
      "pineapple",
      "egg"
    ]);
  });
});

describe("redFruits", () => {

  it("returns all of the fruits that are red", () => {
    expect(redFruits([
      "apple",
      "orange",
      "banana",
      "pomegranate",
      "strawberry",
      "grape",
      "blueberry"
    ])).toEqual([ "apple", "pomegranate", "strawberry" ]);
  });
});
