const { quarter } = require("./quarter.js");

describe("Get Quarter", () => {

    test("The function should return quarter '1' for the months of Jan (1), Feb (2), and Mar(3)", () => {
        expect(quarter(1)).toBe(1);
        expect(quarter(2)).toBe(1);
        expect(quarter(3)).toBe(1);
    });

    test("The function should return quarter '2' for the months of Apr (4), May (6), and Jun (7)", () => {
        expect(quarter(4)).toBe(2);
        expect(quarter(5)).toBe(2);
        expect(quarter(6)).toBe(2);
    });

    test("The function should return quarter '3' for the months of Jul (7), Aug (8), and Sep (9)", () => {
        expect(quarter(7)).toBe(3);
        expect(quarter(8)).toBe(3);
        expect(quarter(9)).toBe(3);
    });

    test("The function should return quarter '4' for the months of Oct (10), Nov (11), and Dec (12)", () => {
        expect(quarter(10)).toBe(4);
        expect(quarter(11)).toBe(4);
        expect(quarter(12)).toBe(4);
    });
    
});