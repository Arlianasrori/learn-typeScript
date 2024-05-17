describe ("paramter properties",() => {
    class Person {
        constructor (public name: string) {

        }
    }

    it("should support parameter properties",() => {
        const person : Person = new Person("habil")
        console.log(person);
        
    })
})