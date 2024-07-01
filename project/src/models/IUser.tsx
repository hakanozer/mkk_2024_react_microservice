export interface IUser {
    id: number
    name: string
    surname?: string
    age: number
    status?: boolean
    click: Function
    profile: JSX.Element
}

export interface IUser {
    uid: number
}

export type Customer = {
 cid: number
}

export type Customer1 = {
    
}

const customer: Customer = {
    cid: 0
}