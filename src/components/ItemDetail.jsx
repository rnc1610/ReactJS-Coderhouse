import React from 'react'
import { Card, CardBody, Image, Stack, Heading, Divider, Text, CardFooter, ButtonGroup, Spinner, Flex } from '@chakra-ui/react'
import ItemCount from './ItemCount'

const ItemDetail = ({productos, productId}) => {
    const producto = productos.find((p) => p.id.toString() === productId);

    if (!producto) {
        return (
            <Flex
              height="60vh"
              justifyContent="center"
              alignItems="center"
            >
              <Spinner size="xl" color="blue" />
            </Flex>
          );
        }

    const { name, longDescription, price, image } = producto;
    const onAdd = (contar) => {
        console.log(`Se agregaron ${contar} unidades del producto ${name} al carrito.`);
    };
    return (
    <div>
    <Card maxW='sm'>
        <CardBody>
            <Image
            src={image}
            borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
            <Heading size='md'>{name}</Heading>
            <Text>
                {longDescription}
            </Text>
            <Text color='blue.600' fontSize='2xl'>
                ${price}
            </Text>
            </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
        <ButtonGroup spacing='2'>
                <ItemCount onAdd={onAdd}/>
            </ButtonGroup>
        </CardFooter>
        </Card>
    </div>
    )        
}
export default ItemDetail