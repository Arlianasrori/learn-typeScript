describe("class",() => {
    class Customer {
        constructor() {
            console.info("welcome new customer")
        }
    }

    class Order {

    }
    it("should support class",() => {
        const customer : Customer = new Customer()
        const order : Order = new Order()

        console.log(customer);
        console.log(order);   
    })
    it("should support constructor class",() => {
        const customer : Customer = new Customer()
        const order : Order = new Order()

        console.log(customer);
        console.log(order);   
    })
})