import { config } from "../api"
import { IProducts } from "../models/IProducts"

export const products = () => {
    return config.get<IProducts>('products')
} 

export const searchProduct = (q: string) => {
    return config.get<IProducts>('products/search', {params: {q: q, limit: 5, skip: 5}})
}