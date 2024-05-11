describe("inheritance",() => {
    class Employe {
        name: string;

        constructor (name : string) {
            this.name = name
        }
    }

    class Manager extends Employe {

    }

    class Direktur extends Manager {

    }
    it("should support inheritance",() => {
       const employe : Employe = new Employe("habil")
       console.info(employe.name)
       const manager : Manager = new Manager("adit")
       console.info(manager.name)
       const direktur : Direktur = new Direktur("dila")
       console.info(direktur.name)
    })
})