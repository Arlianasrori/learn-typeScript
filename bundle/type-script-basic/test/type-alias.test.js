describe("alias", () => {
    it("should support type alias", () => {
        const category = {
            id: "1",
            name: "handphone"
        };
        const product = {
            id: "1",
            name: "redmi 8 a",
            price: 2300,
            category: category
        };
        console.info(category);
        console.info(product);
    });
});
export {};
