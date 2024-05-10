"use strict";
describe("object", () => {
    it("should support tipe data object", () => {
        const mobil = {
            nama: "suzuki",
            speed: 300
        };
        mobil.speed = 200;
        mobil.power = null;
        console.info(mobil);
    });
});
