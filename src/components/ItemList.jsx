import React from 'react'
import Item from './Item'

const ItemList = ({productos}) => {
  return (
    <div>
        {
            productos.map((p)=>{
                return(
                    <Item
                        key = {p.id}
                        name = {p.name}
                        price = {p.price}
                        stock = {p.stock}
                        description = {p.description}
                        longDescription = {p.longDescription}
                        image = {p.image}
                        categoria = {p.categoria}
                    />
                )
            })
        }
    </div>
  )
}

export default ItemList