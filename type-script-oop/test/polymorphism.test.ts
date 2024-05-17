describe("polymorphidm",() => {
    class Employe {
        name : string

        constructor(name : string) {
            this.name = name
        }
    }

    class Manager extends Employe{

    }

    class VicePresident extends Manager{}

    function sayHello (employee : Employe) {
        if(employee instanceof VicePresident) {
            const vp = employee as VicePresident
            console.log(`hello vp ${vp.name}`);
        } else if(employee instanceof Manager) {
            const mn = employee as Manager
            console.log(`hello manager ${mn.name}`);
        } else {
            console.log(`hello employee ${employee.name}`);           
        } 
    }

    it("should support polymorphism",() => {
        let employee : Employe = new Employe("habil")
        employee = new Manager("habil")
        employee = new VicePresident("habil")

        console.log(employee);
        
    })
    it("should support polymorphism method",() => {
        sayHello(new Employe("habil"))       
        sayHello(new Manager("budi"))       
        sayHello(new VicePresident("eko"))       
    })
})