import {Card, CardBody, Image, Stack, Heading, Divider, Text, CardFooter, ButtonGroup, Button} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function Item({ name, price, stock, image, description, id }) {

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
              <Divider />
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
              <Link to={`/item/${id}`}>
                <ButtonGroup spacing='2'>
                  <Button variant='solid' colorScheme='blue'>
                    Detalles
                  </Button>
                </ButtonGroup>
              </Link>
            </CardFooter>
          </Card>
        </div>
      );
    }
    
    export default Item;