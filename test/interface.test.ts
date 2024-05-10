import { Employe, Manager } from "../src/employe"
import { Seller } from "../src/interface"

describe("interface",() => {
    it("should support interface",() => {
        const seller : Seller = {
            id : 1,
            name : "habil",
            nib : "233434",
            npwp : "34343"
        }

        console.info(seller)
    })
    it("should support interface function",() => {
        interface AddFunction {
            (value : number) : number
        }

        const add : AddFunction = (value : number): number => {
            return value * 2 
        }

        console.info(add(20))
    })
    it("should support interface array",() => {
        interface Array {
            [index : number] : string
        }

        const array : Array = ["habil",'bil']

        console.info(array)
    })
    it("should support interface string index",() => {
        interface Array {
            [index : string] : string
        }

        const obj : Array = {
            name : "habil"
        }

        console.info(obj["name"])
    })
    it("should support extend interface",() => {
        const employe : Employe = {
            id : "1",
            name : "habil",
            devisions : "IT"
        }

        const habil : Manager = {
            id : "1",
            name : "habil",
            devisions : "IT",
            age : 18,
            sayHello : (name : String) : string => {
                return `hello ${name} my name is ${habil.name}`
            }
        }

        console.info(employe)
        console.info(habil)
        console.info(habil.sayHello('akbar'))
    })
    it("should support intersection interface",() => {
        interface HasName {
            name : string
        }

        interface HasId {
            id : string
        }

        // interface Domain extends HasName,HasId

        type Domain = HasId & HasName

        const domain : Domain = {
            id : "1",
            name : "habil"
        }

        console.info(domain)
    })
    it("should support type assertions",() => {
        type Person = {
            id : string,
            age : number
        }

        const person : any = {
            id : "1",
            name : "habil"
        }

        const person2 : Person = person as Person
    })
})