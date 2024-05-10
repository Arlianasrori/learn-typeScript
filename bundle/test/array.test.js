"use strict";
describe('array', () => {
    it("should support tipe data array", () => {
        const names = ["habil", "adit", "oni"];
        const numbers = [1, 2, 3, 4];
        console.info(names);
        console.info(numbers);
    });
    it("should support read only array", () => {
        const names = ["habil", "gani"];
        console.info(names);
    });
    it("should support tuple", () => {
        const names = ["habil", 34343, "eko"];
        console.info(names);
    });
});
