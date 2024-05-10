export interface Employe {
    id : string,
    name : string,
    devisions : string
}

export interface Manager extends Employe {
    age : number,
    sayHello(name : string) : string
}