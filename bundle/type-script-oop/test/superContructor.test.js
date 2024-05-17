"use strict";
describe("class", () => {
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    class Employee extends Person {
        constructor(name, departement) {
            super(name);
            this.departement = departement;
        }
    }
    it("should support super contructor", () => {
        const employee = new Employee("habil", "tech");
        console.log(employee);
    });
});
