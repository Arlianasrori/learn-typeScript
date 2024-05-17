"use strict";
describe("static", () => {
    class Ganteng {
    }
    Ganteng.NAME = "habil arlian asrori";
    Ganteng.KELAS = 'x RPL 1';
    Ganteng.AGE = 16;
    class MathUtil {
        static SUM(...value) {
            let total = 0;
            value.forEach(e => {
                total += e;
            });
            return total;
        }
    }
    it("should support static property", () => {
        console.log(Ganteng.NAME);
        console.log(Ganteng.AGE);
        console.log(Ganteng.KELAS);
    });
    it("should support static method", () => {
        console.log(MathUtil.SUM(1, 2, 3, 4, 5));
    });
});
