import React, { useState, useEffect } from 'react';
import { Badge, Flex } from '@chakra-ui/react';
import { useCart } from '../cartContext';

const CartWidget = () => {
  const { cartItems } = useCart();
  const totalItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Flex alignItems="center">
      <span role="img" aria-label="cart">🛒</span>
      <Badge fontSize='2xl' fontWeight='bold' colorScheme="red" variant="solid" alignItems="center">
        {totalItemCount}
      </Badge>
    </Flex>
  );
};

export default CartWidget;