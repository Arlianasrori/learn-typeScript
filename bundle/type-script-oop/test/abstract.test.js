"use strict";
describe('abstract', () => {
    class Customer {
        constructor(id) {
            this.id = id;
        }
    }
    class RegularCustomer extends Customer {
        constructor(id, name) {
            super(id);
            this.name = name;
        }
        sayHello(name) {
            console.log(`hello ${name} my name is ${this.name}`);
        }
    }
    it("should support abstract class", () => {
        const eko = new RegularCustomer(1, "eko");
        console.log(eko);
    });
});
