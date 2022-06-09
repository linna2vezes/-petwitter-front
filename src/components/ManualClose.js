
  import React from 'react';
  import {   LinkBox,  Button,  useDisclosure,   
  Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, ModalHeader, Flex,Image } from '@chakra-ui/react';
  import { useAuth } from "../context/auth-context";
  import { useNavigate } from "react-router-dom";
  import exit from "../images/exit.png"


  
  function ManualClose() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const auth = useAuth();
    const navigate = useNavigate();
      
    return (
        <>
        
        
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
   <ModalOverlay />
  <ModalContent p={3} >
    <ModalHeader m="0" p="2" color={'#424242'}>Sair desta conta?</ModalHeader>
    <ModalCloseButton />
    <ModalBody m="0" p="2" color={'#424242'}>
      Deseja realmente sair desta conta?
    </ModalBody>
              <Flex justifyContent={'space-between'} >
                <Button colorScheme='twitter' variant='outline' w={["100px","150px"]} 
                onClick={ () => {auth.signout(() => navigate("/"))} }>Sair</Button>
                <Button colorScheme='twitter' variant='solid' w={["100px","150px"]} onClick={onClose}>Cancelar</Button>
              </Flex>
                    
          </ModalContent>
      </Modal>
      
      <LinkBox pt={"30px"} onClick={onOpen}  alignSelf={'center'} display={"flex"} flexDirection={"row"}> <Image  src={exit} boxSize='25px' mx={"0.3rem"} alt='Photo'/> Sair </LinkBox>

          
      </>
    )
  }
  
  
  
  
  export default ManualClose;