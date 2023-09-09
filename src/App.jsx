import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/itemListContainer'
import ItemCount from './components/ItemCount'
import '../css/estilos.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {

  const stock = 200;
  const agregarCarrito = (quantity) => {
    console.log(`Agregado al carrito: ${quantity} unidades`);
  };

  return (
    <>
    <NavBar />
    <ItemListContainer /> 
    <ItemCount stock={stock} onAdd={agregarCarrito}/>

    <BrowserRouter>
    <div className='App'>
      <Routes>
        <Route exact path="/" element={<main />}/>
      </Routes>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App