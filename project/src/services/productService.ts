import { config } from "../api"
import { IProducts } from "../models/IProducts"

export const products = () => {
    return config.get<IProducts>('products')
} 