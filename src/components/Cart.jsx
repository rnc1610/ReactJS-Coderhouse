import React from 'react'
import Form from './Form'
import { Button } from '@chakra-ui/react'


const Cart = () => {
  return (
    <>
    <div>
      <h3>Carrito de compras</h3>
      <p>Necesito que se muestre aca todos los detalles de los productos agregados al carrito, mas botones de + y - y un boton de vaciar todo el carrito</p>
      <Button type="submit" colorScheme="blue">Finalizar compra</Button>
    </div>
    <Form/>
    </>
  )
}
export default Cart