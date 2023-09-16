import React from 'react'
import { Card, CardBody, Image, Stack, Heading, Divider, Text, CardFooter, ButtonGroup, Button } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { useParams } from 'react-router-dom'

const ItemDetail = ({productos, productId}) => {
    const producto = productos.find((p) => p.id.toString() === productId);

    if (!producto) {
        return <div>No se encontró el producto.</div>;
    }

    const { name, longDescription, price, image } = producto;

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
                <ItemCount/>
            </ButtonGroup>
        </CardFooter>
        </Card>
    </div>
    )        
}
export default ItemDetail