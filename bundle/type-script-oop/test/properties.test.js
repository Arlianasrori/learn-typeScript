"use strict";
describe("properties class", () => {
    class Customer {
        constructor(id, name) {
            this.name = "guest";
            this.id = id;
            this.name = name;
        }
        sayHello(name) {
            console.log(`hello ${name},my name is ${this.name}`);
        }
    }
    it("should support properties class", () => {
        const customer = new Customer(1, "habil");
        customer.age = 18;
        console.info(customer);
    });
    it("should support default value properties class", () => {
        const customer = new Customer(1, "habil");
        customer.age = 18;
        console.info(customer);
    });
    it("should support method class", () => {
        const customer = new Customer(1, "habil");
        customer.age = 18;
        customer.sayHello("budi");
        console.info(customer);
    });
});
