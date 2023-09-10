import React, {useState} from 'react'
import {Card, CardBody, Image, Stack, Heading, Divider, Text, CardFooter, ButtonGroup, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter} from '@chakra-ui/react'
import ItemDetail from './ItemDetail'
import { Link } from 'react-router-dom'
import '../../css/estilos.css'

function Item({ name, price, stock, image, description, longDescription }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
    return (
        <div className="product-container">
          <Card className="Card" maxW='sm'>
            <CardBody>
              <Divider />
              <Image
                src={image}
                alt='foto'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>{name}</Heading>
                <Text>{description}</Text>
                <Text color='blue.600' fontSize='2xl'>
                  ${price}
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                  Stock disponible: {stock} unidades
                </Text>
              </Stack>
            </CardBody>
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue' onClick={handleOpenModal}>
                  Detalles
                </Button>
              </ButtonGroup>
              {isModalOpen && (
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Detalles</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <ItemDetail name={name} price={price} image={image} longDescription={longDescription} />
                    </ModalBody>
                    <ModalFooter>
                      <Button onClick={() => setIsModalOpen(false)}>Cerrar</Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              )}
            </CardFooter>
          </Card>
        </div>
      );
    }
    
    export default Item;