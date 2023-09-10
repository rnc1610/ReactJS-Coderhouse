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
                  <Link to="/category/dormitorio">Dormitorio</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/category/cocina">Cocina</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/category/living">Living</Link>
                </MenuItem>
            </MenuList>
		      </Menu>
        </Box>
        <Spacer />
        <Box p='4'>
            <CartWidget/>
        </Box>
      </Flex>
    </>
  )
}

export default NavBar