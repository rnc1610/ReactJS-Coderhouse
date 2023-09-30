import React, { useState, useEffect } from 'react';
import CartWidget from './CartWidget';
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer, Link as ChakraLink, Image } from '@chakra-ui/react';
import logoTienda from '../assets/Fotos/logoTienda.png';
import { Link } from 'react-router-dom';

const NavBar = ({ cartItemCount }) => {

  const [totalItemCount, setLocalCartItemCount] = useState(0);

  useEffect(() => {
    setLocalCartItemCount(cartItemCount);
  }, [cartItemCount]);

  return (
    <Flex p={4} bg="blue.200" color="black" alignItems="center" justifyContent="center">
      <Box flex="2">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Flex align="center" color="black" fontSize="2xl" textAlign="center" fontWeight="bold">
            <Image src={logoTienda} alt="logo de la marca" width="150px" />
            Barcelona Muebles
          </Flex>
        </Link>
      </Box>
      <Spacer />
      <Box flex="3">
        <Menu>
          <MenuButton as={ChakraLink} align="center" color="black" fontSize="2xl" textAlign="center" fontWeight="bold">
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
          <CartWidget totalItemCount={totalItemCount} />
        </Link>
      </Box>
    </Flex>
  );
};

export default NavBar;