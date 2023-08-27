import React from 'react'
/*pasado a App con props*/
const itemListContainer = ({greeting}) => {
  return (
    <>
      <div>
        <h1>{greeting}</h1>
      </div>
    </>
  )
}

export default itemListContainer