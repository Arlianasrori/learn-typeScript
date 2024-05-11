"use strict";
describe("gettter setter", () => {
    class Category {
        get name() {
            if (this._name) {
                return this._name;
            }
            else {
                return "empty";
            }
        }
        set name(value) {
            if (value !== "") {
                this._name = value;
            }
        }
    }
    it("should support getter and setter", () => {
        const category = new Category();
        console.info(category.name);
        category.name = "hay";
        // console.info(category.name)
        category.name = "";
        console.info(category.name);
    });
});
