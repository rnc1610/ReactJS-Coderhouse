import React from 'react'
import Item from './Item'

const ItemList = ({productos}) => {
  return (
    <div>
        {
            productos.map((p)=>{
                return(
                    <Item
                        name = {p.name}
                        price = {p.price}
                        stock = {p.stock}
                        description = {p.description}
                        longDescription = {p.longDescription}
                        image = {p.image}
                    />
                )
            })
        }
    </div>
  )
}

export default ItemList