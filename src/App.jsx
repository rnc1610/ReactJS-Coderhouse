import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/itemListContainer'

const App = () => {

  const greeting = "Bienvenidos a Muebles Barcelona"

  return (
    <>
      <NavBar />
      <ItemListContainer greeting={greeting} />

    </>
  )
}

export default App