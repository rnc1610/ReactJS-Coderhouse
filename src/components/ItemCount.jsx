import React, { useState } from 'react';
import {ButtonGroup, Button, Text} from '@chakra-ui/react'

const ItemCount = ({ onAdd }) => {
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
      setContar(0); 
    }
  };

  return (
    <div>
      <ButtonGroup spacing='2'>
        <Button variant='solid' colorScheme='red' onClick={restar}>-</Button>
        <Text variant='solid' colorScheme='white'>{contar}</Text>
        <Button variant='solid' colorScheme='blue' onClick={agregar}>+</Button>
        <Button variant='solid' colorScheme='blue' onClick={agregarCarrito}>Agregar al carrito</Button>
      </ButtonGroup>
    </div>
  );
};

export default ItemCount;