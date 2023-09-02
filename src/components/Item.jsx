import React from 'react'
import {Card, CardBody, Image, Stack, Heading, Divider, Text, CardFooter, ButtonGroup, Button} from '@chakra-ui/react'

const Item = ({name, price, stock, image, description}) => {
  return (
    <div>
    <Card maxW='sm'>
        <CardBody>
            <Image
            src={image}
            alt='Green double couch with wooden legs'
            borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
            <Heading size='md'>{name}</Heading>
            <Text>
                {description}
            </Text>
            <Text color='blue.600' fontSize='2xl'>
                ${price}
            </Text>
            <Text color='blue.600' fontSize='2xl'>
                Stock disponible: {stock} unidades
            </Text>
            </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
            <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
                Detalles
            </Button>
            <Button variant='ghost' colorScheme='blue'>
                Agregar al carrito
            </Button>
            </ButtonGroup>
        </CardFooter>
        </Card>
    </div>
  )
}

export default Item