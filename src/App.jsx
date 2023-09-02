import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/itemListContainer'
import ItemCount from './components/ItemCount'

const App = () => {

  const stock = 200;
  const agregarCarrito = (quantity) => {
    // Aquí puedes manejar la lógica para agregar al carrito con la cantidad seleccionada
    console.log(`Agregado al carrito: ${quantity} unidades`);
  };

  return (
    <>
      <NavBar />
      <ItemListContainer />
      <ItemCount stock={stock} onAdd={agregarCarrito}/>
    </>
  )
}

export default App