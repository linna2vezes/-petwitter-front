
  import React from 'react';
  import {     Button,  useDisclosure,   
  Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, ModalHeader, Flex, } from '@chakra-ui/react';
  import { useAuth } from "../context/auth-context";
  import { useNavigate } from "react-router-dom";


  
  function ManualClose() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const auth = useAuth();
    const navigate = useNavigate();
      
    return (
        <>
        
        <Button onClick={onOpen}>Open Modal</Button>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
   <ModalOverlay />
  <ModalContent>
    <ModalHeader color={'#424242'}>Sair desta conta?</ModalHeader>
    <ModalCloseButton />
    <ModalBody pb={6} color={'#424242'}>
      Deseja realmente sair desta conta?
    </ModalBody>
              <Flex justifyContent={'space-between'} gap={'12px'}>
                <Button colorScheme='twitter' variant='outline' w={"150px"} 
                onClick={ () => {auth.signout(() => navigate("/"))} }>Sair</Button>
                <Button colorScheme='twitter' variant='solid' w={"150px"} onClick={onClose}>Cancelar</Button>
              </Flex>
                    
          </ModalContent>
      </Modal>
      <Button onClick={onOpen}>Open Modal</Button>
          
      </>
    )
  }
  
  
  
  
  export default ManualClose;