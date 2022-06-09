import {Flex, Image, Textarea, Text, Button} from "@chakra-ui/react";
import photoProfile from "../images/photoProfile.jpg"
import { useForm } from 'react-hook-form';
import { createTweet } from '../services/auth';
import React, { useState } from 'react';



function TweetsDesktop() {

  const { register, handleSubmit, reset  } = useForm( );
  const [sending, setSending]= useState (false)
 
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
  
  
  return(
    <Flex  padding={"1rem"} direction={'column'} position="relative"  borderBottom={'4px solid #EEEEEE'} minWidth="600px" width={"100%"} maxHeight="210px" maxWidth="784px">
     <form onSubmit={handleSubmit(onSubmit)}>
        <Flex gap="1rem" marginTop="2rem" display={"flex"} direction={'row'} alignSelf="flex-start">
            <Image borderRadius={"full"} boxSize={'37px'} src={photoProfile} />
            <Textarea border="0 none" _focus={"none"} height="200px"  minWidth="400px" placeholder='O que está acontecendo?' resize={"none"} p="0" maxLength={'140'} {...register("body")} />
       </Flex>
        <Flex position="absolute" padding={"1rem"} display={"flex"} gap="1rem" direction={'row'} bottom="1rem" right="1rem" >
        <Text color="#424242" alignItems={'center'} marginy="auto"  fontsize="13px" fontWeight={"400"}>0/140</Text>
            <Button colorScheme="#00ACC1;" size='sm' type={'submit'} boxShadow="base" borderBottom={'ButtonShadow'}  isLoading={sending} >Petweetar</Button>
             </Flex>
             </form>
    </Flex>
)
}

export default TweetsDesktop;