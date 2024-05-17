describe("class",() => {
  class Person {
    name : string

    constructor (name : string) {
        this.name =name
    }
  }

  class Employee extends Person {
    departement : string

    constructor(name : string,departement : string) {
        super(name)
        this.departement = departement
    }
  }

  it("should support super contructor",() => {
    const employee = new Employee("habil","tech")
    console.log(employee);
    
  })
})