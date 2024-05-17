describe('abstract',() => {
    abstract class Customer {
        readonly id : number
        abstract name : string

        constructor(id : number) {
            this.id = id
        }

        abstract sayHello(name : string) : void
    }

    class RegularCustomer extends Customer {
        name : string

        constructor(id : number,name : string) {
            super(id)
            this.name = name
        }

        sayHello(name: string): void {
            console.log(`hello ${name} my name is ${this.name}`);
            
        }
    }
    it("should support abstract class",() => {
        const eko = new RegularCustomer(1,"eko")
        console.log(eko);
        
    })
})