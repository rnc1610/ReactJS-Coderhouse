import React from 'react'
import CartWidget from './cartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'
import logoTienda from '../assets/Fotos/logoTienda.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <Flex>
        <Box p='4'>
        <Link to="/">
          <div >
          <img src={logoTienda} alt='logo de la marca' style={{ width:'200px', height: 'auto'}} />
          <h1>Barcelona Muebles</h1>
          </div>
        </Link>
        </Box>
        <Spacer />
        <Box p='4'>
          <Menu>
            <MenuButton>
              <h1>Categorias</h1>
            </MenuButton>
            <MenuList>
                <MenuItem>
                  <Link to={`/categoria/${'Dormitorio'}`}>
                  Dormitorio
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to={`/categoria/${'Cocina'}`}>
                  Cocina
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to={`/categoria/${'Living'}`}>
                    Living
                  </Link>
                </MenuItem>
            </MenuList>
		      </Menu>
        </Box>
        <Spacer />
        <Box p='4'>
          <Link to="/form">
            <h2>Formulario</h2>
          </Link>
        </Box>
        <Box p='4'>
          <Link to="/cart">
            <CartWidget/>
          </Link>
        </Box>
      </Flex>
    </>
  )
}

export default NavBar