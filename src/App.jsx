import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/itemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import '../css/estilos.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart'


const App = () => {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer />}/>
        <Route exact path="/item/:id" element={<ItemDetailContainer />}/>
        <Route exact path="/categoria/:categoria" element={<ItemListContainer />}/>
        <Route exact path="/cart" element={<Cart />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App