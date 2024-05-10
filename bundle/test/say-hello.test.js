import { sayHello } from "../src/say-hello";
describe("sayHello", () => {
    it("should say Hello", () => {
        expect(sayHello("habil")).toBe("hello habil");
    });
});
