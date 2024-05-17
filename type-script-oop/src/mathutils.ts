export namespace mathUtil {
    export function sum(...value : number[]) : number {
        let total : number = 0

        value.forEach(e => {
            total += e
        })

        return total
    }
}