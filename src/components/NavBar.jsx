import React from 'react';
import CartWidget from './CartWidget';
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer, Link as ChakraLink, Image, Heading } from '@chakra-ui/react';
import logoTienda from '../assets/Fotos/logoTienda.png';
import { Link } from 'react-router-dom';

const NavBar = ({ cartItemCount }) => {
  return (
    <Flex p={4} bg="blue.600" color="white" alignItems="center" justifyContent="center">
      <Box flex="2">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Flex align="center" color="white" fontSize="2xl" textAlign="center">
            <Image src={logoTienda} alt="logo de la marca" width="150px" />
            Barcelona Muebles
          </Flex>
        </Link>
      </Box>
      <Spacer />
      <Box flex="3">
        <Menu>
          <MenuButton as={ChakraLink} color="white" fontSize="2xl" textAlign="center">
            Categorías
          </MenuButton>
          <MenuList color="black" fontSize="xl">
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
      <Box fontSize="5xl" flex="0.5">
        <Link to="/cart" style={{ textDecoration: 'none' }}>
          <CartWidget itemCount={cartItemCount} />
        </Link>
      </Box>
    </Flex>
  );
};

export default NavBar;