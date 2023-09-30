import React, { useState } from 'react';
import { Card, CardBody, Image, Stack, Heading, Divider, Text, CardFooter, ButtonGroup, Flex } from '@chakra-ui/react';
import ItemCount from './ItemCount';
import CartWidget from './CartWidget';
import { useCart } from '../cartContext'; 

const ItemDetail = ({ productos, productId }) => {
  const producto = productos.find((p) => p.id.toString() === productId);

  const [cartCount, setCartCount] = useState(0);
  const [isAdded, setIsAdded] = useState(false);
  const { addItem } = useCart(); 

  const handleItemCountChange = (count) => {
    setCartCount(count);
  };

  const handleAddToCart = (productDetails, count) => {
    if (count > 0) {
      addItem({ ...productDetails, quantity: count });
      setIsAdded(true);
      setCartCount(count); 
    }
  };

  return (
    <Flex justifyContent="center" alignItems="center">
      <Card maxW="sm">
        <CardBody>
          <Image src={producto.image} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{producto.name}</Heading>
            <Text>{producto.longDescription}</Text>
            <Text color="blue.600" fontSize="2xl">
              ${producto.price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            {isAdded ? (
              <CartWidget itemCount={cartCount} />
            ) : (
              <ItemCount
                onAdd={handleItemCountChange}
                onAddToCart={handleAddToCart}
                productDetails={producto}
              />
            )}
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Flex>
  );
};

export default ItemDetail;