/**
 * @jest-environment jsdom
 */

const addition = require("../calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20,22)).toBe(42);
        });
        test("should return 50 for 20 + 30", () => {
            expect(addition(20,30)).toBe(50);
        });
    });
    describe("Subtraction function", () => {

    });
    describe("Multiplication function", () => {

    });
    describe("Division function", () => {

    });
});