import React, { useState } from 'react';
import {  Button,  useDisclosure,   
Modal,  ModalContent,  ModalBody, ModalHeader, ModalFooter, Flex ,Text, Image, Textarea} from '@chakra-ui/react';
import photoProfile from  "../images/photoProfile.jpg";
import {  AddIcon } from '@chakra-ui/icons';
import { useForm } from 'react-hook-form';
import { createTweet } from '../services/auth';



function TweetsMobile() {

const { isOpen, onOpen, onClose } = useDisclosure();
const size= ['full']


const { register, handleSubmit, reset  } = useForm( );
 const [sending, setSending]= useState (false)
 const[ tweetCaracter, setTweeteCaracter]=useState(0)

const onSubmit =  async  (event) =>{
    try {
  setSending(true)
    await createTweet( event);
    alert("Post criado");
    reset();
    setSending(false);
    
      
  } catch (error) {
    alert("Vixi! Deu ruim! Não foi possível criar o post.")
  } 
}
 


 
  return (
    <Flex display={"flex"} width={"100%"}>
     
       <Button  position={"fixed"} bottom={'0'} right={'0'} margin="1rem"  padding={0} borderRadius="full" color="white" colorScheme='cyan'size='md'
          onClick={onOpen}  >     <AddIcon w={6} h={6} />  </Button>
   

      <Modal isCentered size={size} isOpen={isOpen} direction="column" align="center" >

        <form onSubmit={handleSubmit(onSubmit)} onChange={event => setTweeteCaracter(event.target.value.length)}>
        <ModalContent display="flex" direction={'column'}  >
          <ModalHeader display="flex" align="center" direction="row" justifyContent={"space-between"} 
          borderBottom={"1px solid #EEEEEE"} minH={"2rem"}>
              <Button onClick={onClose} p="0" bg="none" fontsize="2rem" color="#424242"> Cancelar</Button>
              <Text color="#424242" alignItems={'center'} marginy="auto"  fontsize="13px" fontWeight={"400"}>{tweetCaracter}/140</Text>
              <Button colorScheme="#00ACC1;" size='sm' type={'submit'} boxShadow="base" 
              borderBottom={'ButtonShadow'} 
               isLoading={sending}
               >Petweetar</Button>
              </ModalHeader>
          
              <ModalBody display={'flex'} direction={'row'} gap="1rem">
          <Image borderRadius={"full"} boxSize={'37px'} src={photoProfile} />
           <Textarea resize={"none"} p="0" border="none" _focus={"none"}  placeholder='O que está acontecendo?' maxLength={'140'}
            {...register("body")} /> 
          </ModalBody>
          <ModalFooter>
           
          </ModalFooter>
        </ModalContent>
        </form>
        
      </Modal>
 
      </Flex>
        )
      }
 
export default TweetsMobile;