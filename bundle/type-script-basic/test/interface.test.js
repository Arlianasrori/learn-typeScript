describe("interface", () => {
    it("should support interface", () => {
        const seller = {
            id: 1,
            name: "habil",
            nib: "233434",
            npwp: "34343"
        };
        console.info(seller);
    });
    it("should support interface function", () => {
        const add = (value) => {
            return value * 2;
        };
        console.info(add(20));
    });
    it("should support interface array", () => {
        const array = ["habil", 'bil'];
        console.info(array);
    });
    it("should support interface string index", () => {
        const obj = {
            name: "habil"
        };
        console.info(obj["name"]);
    });
    it("should support extend interface", () => {
        const employe = {
            id: "1",
            name: "habil",
            devisions: "IT"
        };
        const habil = {
            id: "1",
            name: "habil",
            devisions: "IT",
            age: 18,
            sayHello: (name) => {
                return `hello ${name} my name is ${habil.name}`;
            }
        };
        console.info(employe);
        console.info(habil);
        console.info(habil.sayHello('akbar'));
    });
    it("should support intersection interface", () => {
        const domain = {
            id: "1",
            name: "habil"
        };
        console.info(domain);
    });
    it("should support type assertions", () => {
        const person = {
            id: "1",
            name: "habil"
        };
        const person2 = person;
    });
});
export {};
