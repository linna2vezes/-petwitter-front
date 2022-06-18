import {Flex, Image, Textarea, Text, Button, useToast} from "@chakra-ui/react";
import photoProfile from "../images/photoProfile.jpg"
import { useForm } from 'react-hook-form';
import { createTweet } from '../services/auth';
import React, { useState } from 'react';



function TweetsDesktop() {

  const { register, handleSubmit, reset  } = useForm( );
  const [sending, setSending]= useState (false)
  const[ tweetCaracter, setTweeteCaracter]=useState(0)
  const toast = useToast()
 const onSubmit =  async  (event) =>{
     try {
   setSending(true)
     await createTweet( event);
     toast({
      position: 'top',
      title: 'Sucesso',
      description: "Post criado!",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
     reset();
     setSending(false);
     
       
   } catch (error) {
    toast({
      position: 'top',
      title: 'Deu ruim',
      description: "O post não pode ser criado!",
      status: 'error',
      duration: 9000,
      isClosable: true,
    })
   } 
 }
  
  
  return(
    <Flex  padding={"1rem"} direction={'column'} position="relative"  borderBottom={'4px solid #EEEEEE'} minWidth="600px" width={"100%"} maxHeight="210px" maxWidth="784px">
     <form onSubmit={handleSubmit(onSubmit)} onChange={event => setTweeteCaracter(event.target.value.length)}>
        <Flex gap="1rem" marginTop="2rem" display={"flex"} direction={'row'} alignSelf="flex-start">
            <Image borderRadius={"full"} display="block" boxSize={'37px'} src={photoProfile} />
            <Textarea border="0 none" _focus={"none"} height="200px"  minWidth="400px" placeholder='O que está acontecendo?' resize={"none"} p="0" maxLength={'140'} {...register("body")} />
       </Flex>
        <Flex position="absolute" padding={"1rem"} display={"flex"} gap="1rem" direction={'row'} bottom="1rem" right="1rem" >
        <Text color="#424242" alignItems={'center'} marginTop="5px"  fontsize="13px" fontWeight={"400"}>{tweetCaracter}/140</Text>
            <Button colorScheme="#00ACC1;" size='sm' type={'submit'} boxShadow="base" borderBottom={'ButtonShadow'}  isLoading={sending} >Petweetar</Button>
             </Flex>
             </form>
    </Flex>
)
}

export default TweetsDesktop;