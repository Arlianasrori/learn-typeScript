describe('union type',() => {
    it("should support union type",() => {
        let sample : string | number | boolean = "ini sample union"
        console.info(sample)

        sample = 2345
        console.info(sample)
        
        sample = true
        console.info(sample)
    })
    it("cek union",() => {
        function proccess (value : number | string | boolean ) {
            if(typeof value == "string") {
                return value.toUpperCase()
            }else if(typeof value == "number") {
                return value * 2
            }else {
                return value
            }
        }

        expect(proccess("habil")).toBe("HABIL")
        expect(proccess(2)).toBe(4)
        expect(proccess(true)).toBe(true)
    })
})