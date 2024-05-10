describe("function",() => {
    it("should support function",() => {
        function sayHello (name : string): string {
            return `hello ${name}`
        }
        function logHello (name : string = "habil"): void {
            console.log(name);          
        }
    })
    it("should support rest parameter",() => {
        function sum (...values : number[]): number {
            let total : number = 0;
            for (const value of values) {
                total += value
            }

            return total
        }

        expect(sum(1,2,3)).toBe(6)
    })
    it("should support function parameter",() => {
        function sum (...values : number[]): number {
            let total : number = 0;
            for (const value of values) {
                total += value
            }

            return total
        }

        function hitung (value : number,sum : (...values : number[]) => number ): number  {
            return sum(1,2,3) + value
        }
        console.info(hitung(1,sum))
        expect(sum(1,2,3)).toBe(6)
        expect(hitung(1,sum)).toBe(7)
    })
    it("should support annonymus function",() => {
        function hitung (value : number,sum : (...values : number[]) => number ): number  {
            return sum(1,2,3) + value
        }
        console.info(hitung(1,(...values : number[]): number => {
            let total : number = 0;
            for (const value of values) {
                total += value
            }

            return total
        }))
    })
})