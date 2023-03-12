'use client'
import React, {useEffect, useState} from 'react';
import { useCart } from '@/lib/swell/hooks';
export const StorefrontContext = React.createContext();

export const StorefrontProvider = ({ children }) => {

  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const { cart, addItem, removeItem } = useCart();

  const toggleCart = () => {
    setOpen(!open)
  }

  return(
    <StorefrontContext.Provider value={{
      cart,
      addItem,
      removeItem,
      open,
      setOpen,
      toggleCart,
      loading,
      setLoading
    }}>
      {children}
    </StorefrontContext.Provider>
  )
}