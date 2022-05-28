import {
  Drawer,  DrawerBody,  DrawerFooter,  DrawerHeader,  DrawerOverlay,
  DrawerContent,  DrawerCloseButton, Button,  useDisclosure,  Box, Image} from '@chakra-ui/react'
import React from 'react';
import menu from '../images/menu.png'
import logo from '../images/logo.png'

function Home() {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
    <Box display={'flex'}   boxShadow="base"  p="3" flexDirection={'row'}  bgImage={logo}  bgRepeat="no-repeat" bgPosition={"center"} width={"100%"} position={"absolute"} 
    borderBottom={'ButtonShadow'}>
      <Button ref={btnRef} bg='none'  alignContent="center"  onClick={onOpen} >
        <Image ml={'0.2rem'} alignContent="center"  height={'1.3rem'}  src= {menu}   alt='menu'  />
      </Button>
      {/* <Image      src= {logo}   alt='menu'  /> */}
      </Box> 
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}




export default Home;
