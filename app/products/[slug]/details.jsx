'use client'
import { useContext } from "react"
import {StorefrontContext} from "@/provider/storefront-provider"

const Details = ({ product }) => {

  const { addItem } = useContext(StorefrontContext)

  const { id, name, description } = product

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">{name}</h1>
      <div className="mt-5 text-l md:text-xl text-black" dangerouslySetInnerHTML={{ __html: description }} />


      <button 
        type="button" 
        onClick={() => addItem({product_id: id, quantity: 1})} 
        className="mt-5 w-full py-3 px-5 bg-red-900 text-white text-lg font-bold rounded-md hover:bg-red-500">
        Add to Cart
      </button>

    </div>
  )
}

export default Details