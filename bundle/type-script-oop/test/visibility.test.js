"use strict";
describe("visibily", () => {
    class Counter {
        constructor() {
            this.number = 0;
        }
        incerement() {
            this.number++;
        }
        getCounter() {
            return this.number;
        }
    }
    class DoubleCounter extends Counter {
        increment() {
            this.number += 2;
        }
    }
    it("should support private", () => {
        const counter = new Counter();
        counter.incerement();
        console.log(counter.getCounter());
    });
    it("should support protected", () => {
        const doubleCounter = new DoubleCounter();
        doubleCounter.incerement();
        console.log(doubleCounter.getCounter());
    });
});
