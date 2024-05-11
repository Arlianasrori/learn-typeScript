export enum CustomerType {
    regular = "regular",
    gold = "gold",
    platinum = "platinum"
}

export type Customer = {
    id : number,
    name : string,
    type : CustomerType
}