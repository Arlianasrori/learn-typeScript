"use strict";
describe('tipe data', () => {
    it("should support tipe data", () => {
        const name = "habil";
        const balance = 234;
        const isVip = true;
        expect(name).toEqual("habil");
        expect(balance).toEqual(234);
        expect(isVip).toEqual(true);
    });
});
