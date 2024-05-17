"use strict";
describe("paramter properties", () => {
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    it("should support parameter properties", () => {
        const person = new Person("habil");
        console.log(person);
    });
});
