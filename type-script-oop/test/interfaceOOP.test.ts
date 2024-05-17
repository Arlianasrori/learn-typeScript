describe("class",() => {
    interface HasName {
        name : string
    }

    interface CanSayHello {
        sayHello(name : string) : void
    }

    class Person implements HasName,CanSayHello {
        name : string
        constructor (name : string) {
            this.name = name
        }

        sayHello(name : string) : void {
            console.log(`hello ${name} my name is ${this.name}`);
            
        }
    }
    it("should support interface inheritance",() => {
        const habil = new Person("habil")
        habil.sayHello("budi")
    })
})