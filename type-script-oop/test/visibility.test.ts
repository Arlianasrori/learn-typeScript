describe("visibily",() => {
    class Counter {
        protected number : number = 0

        incerement () : void {
            this.number++
        }

        getCounter () : number {
            return this.number
        }
    }

    class DoubleCounter extends Counter{
        increment () :void {
            this.number += 2
        }
    }

    it("should support private",() => {
        const counter = new Counter()
        counter.incerement()
        console.log(counter.getCounter());
        
    })
    it("should support protected",() => {
        const doubleCounter = new DoubleCounter()
        doubleCounter.incerement()
        console.log(doubleCounter.getCounter());
        
    })
  })