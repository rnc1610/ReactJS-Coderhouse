import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './components/Cart'
import Form from './components/Form'
import ItemDetailContainer from './components/ItemDetailContainer'


function App() {

  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        <Route exact path="/categoria/:categoria" element={<ItemListContainer />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App