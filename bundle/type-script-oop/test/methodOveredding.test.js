"use strict";
describe("class", () => {
    class Employe {
        constructor(name) {
            this.name = name;
        }
        sayHello(name) {
            console.log(`hello ${name} my name is ${this.name}`);
        }
    }
    class Manager extends Employe {
        sayHello(name) {
            super.sayHello(name);
            console.log(`hello ${name} my name is ${this.name} iam is your manager`);
        }
    }
    it("should support method overidding", () => {
        const employe = new Manager("habil");
        employe.sayHello("budi");
    });
    it("should support super method", () => {
        const employe = new Manager("habil");
        employe.sayHello("budi");
    });
});
