"use strict";
describe("class", () => {
    class Person {
        constructor(name) {
            this.name = name;
        }
        sayHello(name) {
            console.log(`hello ${name} my name is ${this.name}`);
        }
    }
    it("should support interface inheritance", () => {
        const habil = new Person("habil");
        habil.sayHello("budi");
    });
});
