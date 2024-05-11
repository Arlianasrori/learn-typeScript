describe("gettter setter",() => {
    class Category {
        _name? : string;

        get name() : string {
            if(this._name) {
                return this._name
            }else {
                return "empty"
            }
        }

        set name(value : string) {
            if(value !== "") {
                this._name = value
            }
        }
    }
    it("should support getter and setter",() => {
        const category : Category = new Category()
        console.info(category.name)
        category.name = "hay"
        // console.info(category.name)
        category.name = ""
        console.info(category.name)
    })
})