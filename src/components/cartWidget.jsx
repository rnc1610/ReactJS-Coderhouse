import React from 'react';
import { Badge, Flex } from '@chakra-ui/react';

const CartWidget = ({ itemCount }) => {
  return (
    <Flex alignItems="center">
      <span role="img" aria-label="cart">🛒</span>
      <Badge colorScheme="blue" variant="solid">
        {itemCount}
      </Badge>
    </Flex>
  );
};

export default CartWidget;