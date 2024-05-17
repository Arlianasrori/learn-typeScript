describe("static",() => {
    class Ganteng {
        static NAME : string = "habil arlian asrori"
        static KELAS : string = 'x RPL 1'
        static AGE : number = 16
    }

    class MathUtil {
        static SUM(...value : number[]) : number {
            let total : number = 0

            value.forEach(e => {
                total += e
            })

            return total
        }
    }

    it("should support static property",() => {
        console.log(Ganteng.NAME);
        console.log(Ganteng.AGE);
        console.log(Ganteng.KELAS);
        
    })
    it("should support static method",() => {
        console.log(MathUtil.SUM(1,2,3,4,5));      
    })
})