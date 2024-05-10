describe('tipe data',() => {
    it("should support tipe data",() => {
        const name: string = "habil"
        const balance : number = 234
        const isVip : boolean = true

        expect(name).toEqual("habil")
        expect(balance).toEqual(234)
        expect(isVip).toEqual(true)
    })
})