"use strict";
describe("inheritance", () => {
    class Employe {
        constructor(name) {
            this.name = name;
        }
    }
    class Manager extends Employe {
    }
    class Direktur extends Manager {
    }
    it("should support inheritance", () => {
        const employe = new Employe("habil");
        console.info(employe.name);
        const manager = new Manager("adit");
        console.info(manager.name);
        const direktur = new Direktur("dila");
        console.info(direktur.name);
    });
});
