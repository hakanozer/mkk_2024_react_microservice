import { create } from 'zustand'
import { Product } from '../models/IProducts'
import { persist } from 'zustand/middleware'
import { createWithEqualityFn } from 'zustand/traditional'

interface CartState {
    items: Product[]
    addItem: (by: Product) => void
}

export const useCartStore = createWithEqualityFn<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: ( newItem ) => set((state) => ({ items: [...state.items, newItem] })),
    }),
    {
      name: 'cart-storage',
    },
  ),
  Object.is
)