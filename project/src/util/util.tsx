import { ICustomer } from "../models/ICustomer"
import CryptoJS from 'crypto-js'

export const storeUser = ( user: ICustomer ) => {
    const stUser = JSON.stringify(user)
    const plainUser = encrypt(stUser)
    localStorage.setItem('customer', plainUser)
}

export const getUser = () : ICustomer | null => {
    const stUser = localStorage.getItem('customer')
    if (stUser) {
        try {
            const cipherText = decrypt(stUser)
            const user = JSON.parse(cipherText) as ICustomer
            return user
        } catch (error) {
            localStorage.removeItem('customer')
        }
    }
    return null
}


export const encrypt = (plainText: string) => {
    const chipherText = CryptoJS.AES.encrypt(plainText, 'key123')
    return chipherText.toString()
}

export const decrypt = (cipherText: string) => {
    const bytes = CryptoJS.AES.decrypt(cipherText, 'key123')
    const plainText = bytes.toString(CryptoJS.enc.Utf8)
    return plainText
}

export const fncLikes = (pid: number) => {
    const stLikes = localStorage.getItem('likes')
    if (stLikes) {
        // add - remove
        let arr = JSON.parse(stLikes) as number[]
        const index = arr.findIndex(item => item == pid)
        if (index == -1) {
            // add
            arr.push(pid)
        }else {
            //  remove
            arr.splice(index)
        }
        const stArr = JSON.stringify(arr)
        localStorage.setItem('likes', stArr)
    }else {
        // first add
        const arr = [pid]
        const stArr = JSON.stringify(arr)
        localStorage.setItem('likes', stArr)
    }
}

export const allLikes = () => {
    const stLikes = localStorage.getItem('likes')
    if (stLikes) { 
        let arr = JSON.parse(stLikes) as number[]
        return arr
    }else {
        return []
    }
}