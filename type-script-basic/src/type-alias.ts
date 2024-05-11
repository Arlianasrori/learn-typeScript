export type Id = string | number

export type Category = {
    id : Id,
    name : string
}

export type Product = {
    id : Id,
    name : string,
    price : number,
    category : Category
}