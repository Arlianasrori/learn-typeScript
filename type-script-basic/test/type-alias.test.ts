import { Category, Product } from "../src/type-alias"

describe("alias",() => {
    it("should support type alias",() => {
        const category : Category = {
            id : "1",
            name : "handphone"
        }

        const product : Product = {
            id : "1",
            name : "redmi 8 a",
            price : 2300,
            category : category
        }

        console.info(category)
        console.info(product)
    })
})