"use strict";
describe("null and undefines", () => {
    it("should support tipe data undefined", () => {
        function sayHello(name) {
            if (name) {
                console.log(`hello ${name}`);
            }
            else {
                console.log(name);
            }
        }
        sayHello("habil");
        sayHello(undefined);
        sayHello(null);
    });
});
