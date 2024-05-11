describe('array',() => {
    it("should support tipe data array",() => {
        
        const names : string[] = ["habil","adit","oni"]
        const numbers : number[] = [1,2,3,4]

        console.info(names)
        console.info(numbers)
    })
    it("should support read only array",() => {
        
        const names : ReadonlyArray<string> = ["habil","gani"]

        console.info(names)
    })
    it("should support tuple",() => {
        
        const names : readonly [string,number,string] = ["habil",34343,"eko"]

        console.info(names)
    })
})