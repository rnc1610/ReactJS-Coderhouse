import React from 'react'
import CartWidget from './cartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer, Link as ChakraLink, Image, Heading, } from '@chakra-ui/react'
import logoTienda from '../assets/Fotos/logoTienda.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Flex p={4} bg="blue.300" color="white">
      <Box>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Flex align="center">
            <Image src={logoTienda} alt="logo de la marca" boxSize="100px" />
            <Heading size="md" ml={2}>
              Barcelona Muebles
            </Heading>
          </Flex>
        </Link>
      </Box>
      <Spacer />
      <Box>
        <Menu>
          <MenuButton as={ChakraLink} color="white">
            Categorías
          </MenuButton>
          <MenuList color="black">
            <MenuItem>
              <Link to={`/categoria/${'Dormitorio'}`}>Dormitorio</Link>
            </MenuItem>
            <MenuItem>
              <Link to={`/categoria/${'Cocina'}`}>Cocina</Link>
            </MenuItem>
            <MenuItem>
              <Link to={`/categoria/${'Living'}`}>Living</Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Box>
        <Link to="/cart" style={{ textDecoration: 'none' }}>
          <CartWidget />
        </Link>
      </Box>
    </Flex>
  );
};

export default NavBar;