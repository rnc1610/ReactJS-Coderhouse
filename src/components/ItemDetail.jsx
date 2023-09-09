import React from 'react'
import { Card, CardBody, Image, Stack, Heading, Divider, Text, CardFooter, ButtonGroup, Button } from '@chakra-ui/react'

const ItemDetail = ({name, price, image, longDescription}) => {
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
            <Button variant='solid' colorScheme='blue'>
                Agregar al carrito
            </Button>
            </ButtonGroup>
        </CardFooter>
        </Card>
    </div>
  )
}

export default ItemDetail