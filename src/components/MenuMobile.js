import {
  Drawer,  DrawerBody,    DrawerHeader,  DrawerOverlay,
  DrawerContent,  DrawerCloseButton, Button,  useDisclosure,  Box, Image,  Flex, LinkBox } from '@chakra-ui/react'
import React from 'react';
import menu from '../images/menu.png'
import logo from '../images/logo.png'
import { Link as ReachLink,  Outlet,  useLocation } from "react-router-dom";
import photoProfile from "../images/photoProfile.jpg"
// import exit from "../images/exit.png"
import ManualClose from './ManualClose';
import { useAuth } from "../context/auth-context";





 
  
  function MenuMobile() {
  
    const {user} = useAuth()
    const btnRef = React.useRef()
    const location = useLocation();
    
    // const { isOpen: modalIsOpen, onOpen: modalOnOpen, onClose: modalOnClose } = useDisclosure()
    const { isOpen, onOpen, onClose } = useDisclosure()

   
  
    return (
   <>
  <Box display={"flex"}  alignItems={'center'} boxShadow="base"  p="3" flexDirection={'row'}  width={"100%"} 
      borderBottom={'ButtonShadow'}>
        
        
        <Button ref={btnRef} bg='none'  p="0" onClick={onOpen} >
        <Image ml={'0.2rem'}  height={'1.3rem'}  src= {menu}   alt='menu'  /> </Button>
        
        <Flex width={"100%"} justifyContent="center">
        <Image src={logo}  alt='logo' /> </Flex>
        
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
            <DrawerHeader ></DrawerHeader>
            <DrawerBody p={"0"}  >
            <Image  margin={"auto"} marginBottom={"2rem"} marginTop={"2rem"} borderRadius='full'  boxSize='100px'
            src={photoProfile}    alt='Photo'/>
              
            <Flex display={"flex"} flexDirection='column' justifyContent={'flex-start'} width="100%" >
            <LinkBox    width="100%"  borderRadius={"0"} variant ="link" paddingY={"0.6rem"} textAlign={"center"}  colorScheme="#424242"
             as={ReachLink} to="/"   background={location.pathname === '/' ? "#E5F7F9" : ""}
            color={location.pathname === '/' ? "#00ACC1" : ""}
            borderWidth={location.pathname === '/' ? ' 0 0 0 5px' : ''}
            borderColor={location.pathname === '/' ? '#00ACC1' : ''}
            fontWeight={location.pathname === '/' ? "bold": ''}
           

  // _hover={{   borderLeft:'5px', textDecoration:"bold", background: "#E5F7F9",  width:"100%",   color: "#00ACC1",   }} 
  >   HOME </LinkBox  >
            <LinkBox    width="100%"  borderRadius={"0"} variant ="link" paddingY={"0.6rem"} textAlign={"center"}  colorScheme="#424242"
            as={ReachLink} to={`/profile/${user.id}`}  background={location.pathname === `/profile/${user.id}` ? "#E5F7F9" : ""}
            color={location.pathname === `/profile/${user.id}` ? "#00ACC1" : ""}
            borderWidth={location.pathname === `/profile/${user.id}`  ? ' 0 0 0 5px' : ''}
            borderColor={location.pathname === `/profile/${user.id}` ? '#00ACC1' : ''} 
            fontWeight={location.pathname === `/profile/${user.id}` ? "bold": ''}>   PERFIL </LinkBox  >
            {/* <LinkBox pt={"30px"} as={ReachLink} to="/" margin={"auto"}  display={"flex"} flexDirection={"row"}> <Image  src={exit} boxSize='25px' mx={"0.3rem"} alt='Photo'/> Sair </LinkBox> */}
            <ManualClose />
          </Flex>
            </DrawerBody>
            
            
          </DrawerContent>
        </Drawer> 
        <Outlet />
        </> 

  )
}




export default MenuMobile;