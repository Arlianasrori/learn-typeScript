describe("class",() => {
    class Employe {
        name : string
         constructor(name : string) {
            this.name = name
         }

         sayHello(name : string) : void {
            console.log(`hello ${name} my name is ${this.name}`);
         }
    }

    class Manager extends Employe{
        sayHello(name: string): void {
            super.sayHello(name)
            console.log(`hello ${name} my name is ${this.name} iam is your manager`);
            
        }
    }

    it("should support method overidding",() => {
        const employe : Manager = new Manager("habil")
        employe.sayHello("budi")
    })
    it("should support super method",() => {
        const employe : Manager = new Manager("habil")
        employe.sayHello("budi")
    })
})