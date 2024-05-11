import { CustomerType } from "../src/enum";
describe("enum", () => {
    it("should support tipe data enum", () => {
        const employe = {
            id: 1,
            name: "habil",
            type: CustomerType.gold
        };
        console.info(employe);
    });
});
