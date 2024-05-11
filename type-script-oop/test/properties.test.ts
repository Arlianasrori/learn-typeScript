describe("properties class",() => {
    class Customer {
        readonly id: number;
        name : string = "guest";
        age? : number;
    
        constructor(id : number,name : string) {
            this.id = id
            this.name = name
        }

        sayHello(name : string) : void {
            console.log(`hello ${name},my name is ${this.name}`);           
        }
    }

    
    it("should support properties class",() => {
        const customer : Customer = new Customer(1,"habil")
        customer.age = 18

        console.info(customer)
    })
    it("should support default value properties class",() => {
        const customer : Customer = new Customer(1,"habil")
        customer.age = 18

        console.info(customer)
    })
    it("should support method class",() => {
        const customer : Customer = new Customer(1,"habil")
        customer.age = 18
        customer.sayHello("budi")

        console.info(customer)
    })
})