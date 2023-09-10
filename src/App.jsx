import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/itemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import '../css/estilos.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => {

  const stock = 200;
  const agregarCarrito = (quantity) => {
    console.log(`Agregado al carrito: ${quantity} unidades`);
  };

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer />}/>
        <Route exact path="/item/:id" element={<ItemDetailContainer />}/>
        <Route exact path="/category/:id" element={<ItemListContainer />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App