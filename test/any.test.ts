describe("any",() => {
    it("should support tipe data any",() => {
        const mobil : any = {
            nama : "suzuki",
            speed : 300
        }

        mobil.speed = 200
        mobil.power = 400

        console.info(mobil)
    })
})