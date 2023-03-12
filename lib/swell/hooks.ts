'use client'

import { useEffect, useState} from 'react'
import { swell } from './init/client'
import { CartItem } from "swell-js/types/cart"

export const useCart = () => {

  const [cart, setCart] = useState<swell.Cart>()

  const addItem = async (item: CartItem) => {
    // this will be an object
    const cart = await swell.cart.addItem(item)
  }

  const removeItem = async (item: string) => {
    const cart = await swell.cart.removeItem(item)
  }

  const getCart = async () => {
    let cart = await swell.cart.get() || {}
    setCart(cart);
  }

  useEffect(() => {
    getCart()
  }, [])

  return { cart, addItem, removeItem }

}