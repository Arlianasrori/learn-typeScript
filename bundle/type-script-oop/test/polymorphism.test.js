"use strict";
describe("polymorphidm", () => {
    class Employe {
        constructor(name) {
            this.name = name;
        }
    }
    class Manager extends Employe {
    }
    class VicePresident extends Manager {
    }
    function sayHello(employee) {
        if (employee instanceof VicePresident) {
            const vp = employee;
            console.log(`hello vp ${vp.name}`);
        }
        else if (employee instanceof Manager) {
            const mn = employee;
            console.log(`hello manager ${mn.name}`);
        }
        else {
            console.log(`hello employee ${employee.name}`);
        }
    }
    it("should support polymorphism", () => {
        let employee = new Employe("habil");
        employee = new Manager("habil");
        employee = new VicePresident("habil");
        console.log(employee);
    });
    it("should support polymorphism method", () => {
        sayHello(new Employe("habil"));
        sayHello(new Manager("budi"));
        sayHello(new VicePresident("eko"));
    });
});
