import React, { useState } from 'react';
import Form from './Form';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Table, Thead, Tbody, Tr, Th, Td, Image, Heading, Flex, Text, Box} from '@chakra-ui/react';
import { useCart } from '../cartContext';

const Cart = () => {
  const { cartItems, removeItem, clear } = useCart();
  const cartIsEmpty = !cartItems || cartItems.length === 0;

  const totalPrice = cartIsEmpty
    ? 0
    : cartItems.reduce((total, item) => {
        const quantity = typeof item.quantity === 'number' ? item.quantity : 0;
        return total + item.price * quantity;
      }, 0);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePurchaseSuccess = () => {
    clear();
  };
  return (
    <>
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Heading as="h1" fontSize="2xl" fontWeight="bold">
          Carrito de compras
        </Heading>
        {cartIsEmpty ? (
          <Text mt="4" fontSize="3xl">
            El carrito está vacío
          </Text>
        ) : (
          <>
            <Flex justifyContent="center">
              <Table mt="4" variant="simple" fontSize="lg">
                <Thead>
                  <Tr>
                    <Th>Imagen</Th>
                    <Th>Nombre</Th>
                    <Th>Precio por unidad</Th>
                    <Th>Cantidad</Th>
                    <Th>Subtotal</Th>
                    <Th>Acciones</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {cartItems.map((item, index) => (
                    <Tr key={index}>
                      <Td>
                        <Image src={item.image} alt={item.name} width="250px" />
                      </Td>
                      <Td>{item.name}</Td>
                      <Td>${item.price}</Td>
                      <Td>{item.quantity}</Td>
                      <Td>${item.price * item.quantity}</Td>
                      <Td>
                        <Button
                          colorScheme="red"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                        >
                          Eliminar Productos
                        </Button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Flex>
            <Flex mt="5" p={4} alignItems="center" justifyContent="center">
              <Box flex="2" marginLeft="1">
                <Button mr="2" colorScheme="blue" onClick={clear}>
                  Vaciar Carrito
                </Button>
              </Box>
              <Box flex="2" marginLeft="300">
                <Text fontWeight="bold" fontSize="2xl">
                  Total:${totalPrice}
                </Text>
              </Box>
              <Box flex="1" marginLeft="300">
                <Button colorScheme="blue" onClick={handleOpenModal}>
                  Comprar
                </Button>
              </Box>
            </Flex>
          </>
        )}
      </Flex>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Finalizar compra</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Form
              cartItems={cartItems}
              totalPrice={totalPrice}
              onPurchaseSuccess={handlePurchaseSuccess}
              closeModal={handleCloseModal}
            />
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </>
  );
};

export default Cart;