import React, { useState } from 'react';
import {ButtonGroup, Button} from '@chakra-ui/react'

const ItemCount = ({stock, onAdd }) => {
  const [contar, setContar] = useState(0);

  const agregar = () => {
    setContar(contar + 1);
  };

  const restar = () => {
    if (contar > 0) {
      setContar(contar - 1);
    }
  };

  const agregarCarrito = () => {
    if (contar > 0) {
      onAdd(contar);
    }
  };

  return (
    <div>
      <h2>ItemCount</h2>
      <p>Cantidad: {contar}</p>
      <ButtonGroup spacing='2'>
        <Button variant='solid' colorScheme='red' onClick={restar}>-</Button>
        <Button variant='solid' colorScheme='blue' onClick={agregar}>+</Button>
        <Button variant='ghost' colorScheme='blue' onClick={agregarCarrito}>Agregar al carrito</Button>
      </ButtonGroup>
    </div>
  );
};

export default ItemCount;