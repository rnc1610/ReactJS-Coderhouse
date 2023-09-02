import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/itemListContainer'
import Hooks from './components/Hooks'

const App = () => {

  const greeting = "Bienvenidos a Muebles Barcelona"

  return (
    <>
      <NavBar />
      <ItemListContainer />
      <Hooks />
    </>
  )
}

export default App