let score : number | string = 77

type User = {
    name: string
    age: number
}

type Admin = {
    name: string
    role: string
}

let user : User | Admin = {
    name: 'John',
    age: 25
}