import React from 'react';
import '../../css/estilos.css'

/*pasado a App con props*/
const itemListContainer = ({greeting}) => {
  return (
    <>
      <div className="greeting">
        <h1>{greeting}</h1>
      </div>
    </>
  )
}

export default itemListContainer