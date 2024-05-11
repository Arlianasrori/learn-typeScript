import { Customer, CustomerType } from "../src/enum"

describe("enum",() => {
    it("should support tipe data enum",() => {
        const employe : Customer = {
            id : 1,
            name : "habil",
            type : CustomerType.gold
        }

        console.info(employe)
    })
})