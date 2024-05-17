"use strict";
describe("instanceOf", () => {
    class Employe {
    }
    class Manager {
    }
    it("should support instanceOf", () => {
        const budi = new Employe();
        const eko = new Manager();
        expect(budi instanceof Employe).toBe(true);
        expect(eko instanceof Manager).toBe(true);
        expect(eko instanceof Employe).toBe(false);
        expect(budi instanceof Manager).toBe(false);
    });
});
