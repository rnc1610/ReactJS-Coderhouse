import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Flex, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/react';

const ItemCount = ({ onAdd, onAddToCart, productDetails }) => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    if (count < 999) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    if (count > 0) {
      onAdd(count);
      onAddToCart(productDetails, count); 
      setCount(1); 
    }
  };

  return (
    <Flex alignItems="center">
      <NumberInput defaultValue={count} min={1} max={999} mr="2">
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper onClick={handleIncrement} />
          <NumberDecrementStepper onClick={handleDecrement} />
        </NumberInputStepper>
      </NumberInput>
      <Link to="/cart">
      <Button
        variant="solid"
        colorScheme="blue"
        onClick={handleAddToCart}
      >
        Agregar al carrito
      </Button>
      </Link>
    </Flex>
  );
};

export default ItemCount;