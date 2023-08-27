import React from 'react'
import CartWidget from './cartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'
import logoTienda from '../assets/Fotos/logoTienda.png'

const NavBar = () => {
  return (
    <>
      <Flex>
        <Box p='4'>
          <div >
          <img src={logoTienda} alt='logo de la marca' style={{ width:'200px', height: 'auto'}} />
          <h1>Barcelona Muebles</h1>
          </div>
        </Box>
        <Spacer />
        <Box p='4'>
          <Menu>
            <MenuButton>
              <h1>Categorias</h1>
            </MenuButton>
            <MenuList>
                <MenuItem>Dormitorio</MenuItem>
                <MenuItem>Cocina</MenuItem>
                <MenuItem>Living</MenuItem>
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