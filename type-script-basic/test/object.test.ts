describe("object",() => {
    it("should support tipe data object",() => {
        const mobil : {nama : string,speed : number,power? : number | null} = {
            nama : "suzuki",
            speed : 300
        }

        mobil.speed = 200
        mobil.power = null

        console.info(mobil)
    })
})