import { Flex, Stack, Image, Input, InputGroup,InputRightElement, Button, Link, useMediaQuery, Container, FormLabel  } from "@chakra-ui/react";
import { useLocation, useNavigate, Link as ReachLink } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import dogFrontRegister from '../images/dogFrontRegister.png'
import logoWhite from '../images/logoWhite.png'
import logo from '../images/logo.png'
import logoBlue from '../images/logoBlue.png'
import dogFrontDesktop from '../images/dogFrontDesktop.png'
import logoWhiteDesktop from '../images/logoWhiteDesktop.png'
import { LoginTitle,  LinkRegister} from "../styled";
import React from 'react';
import { ViewIcon , ViewOffIcon } from '@chakra-ui/icons'

// The default icon size is 1em (16px)





function Register() {
  const navigate = useNavigate();
  const location = useLocation();
  const { signin } = useAuth();
  const [isLargerThan480] = useMediaQuery('(min-width: 480px)')

  const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

  const from = location.state?.from?.pathname || "/";

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    await signin({ email, password });
    navigate(from, { replace: true });
  }

  return (

   <Container maxW='1280px' p={0} >
    <Flex direction={['column', 'row']}  paddingBottom={['4rem', 0]}>
     {/* --------------------imagem background */}

      <Stack  color={'white'}  bgImage={[dogFrontRegister,dogFrontDesktop]} bgRepeat='no-repeat' bgSize={'cover'} bgPosition={"center"}
      height={['143px', '100vh']}  display={'flex'} gap={"2rem"} paddingLeft={"2rem"} justify={'center'} paddingTop={"4rem"} flexDirection={"column"} Width ={'100%'} maxW={['','768px']}
      minW={['','768px']}>
        
      
     {!isLargerThan480?  <>
      <Image   boxSize='50px' src= {logoWhite}   alt='LOGO'  />
      
      </> : <Image width={'418px'} justify={'center'} alignSelf='center' src= {logoWhiteDesktop}  alt='LOGO'  />}

    </Stack>
         {/* --------------------imagem background */}
         

    <Flex  marginTop={["1rem", 0]} display={'flex'} p={'2rem'}  alignContent={'center'} pt={0}  justifyContent="center" flexDirection={"column"} 
    Width ={'100%'} maxW={['','512px']}  minW={['','500px']} >

    {!isLargerThan480?  ''  : <><Flex color={'#00ACC1'} display={'flex'} flexDirection={'column'} marginLeft={'0'}><Image width={'76px'}  src= {logoBlue}  alt='LOGO'  />
    </Flex>
     </>}
    
    <LoginTitle >
    Cadastro
    </LoginTitle>
     
         <form onSubmit={handleSubmit} >
       
          <InputGroup  focusBorderColor='#00ACC1'  flexDirection={"column"} bgcolor={"white"} size='md' gap={"7px"}>

          <FormLabel>    Nome      
          <Input variant="outline" width={'100%'}  placeholder='Nome' size='md' /></FormLabel>

          <FormLabel>    Email      
          <Input variant="outline" width={'100%'}  placeholder='E-mail' size='md' /></FormLabel>

          <FormLabel>    Nome de usuário      
          <Input variant="outline" width={'100%'}  placeholder='Ex.: @billbulldog' size='md' /></FormLabel>
          
          <FormLabel>      Senha
          <Input   width={'100%'} variant="outline"  bg={"white"}    
          placeholder='Senha' 
            type={show ? 'text' : 'password'} />
     
         <InputRightElement  paddingTop={"17.7rem"}  width='4.3rem'>
          <Button  h='1.75rem' size='lg' bg='none' onClick={handleClick}>
          {show ? <ViewOffIcon boxSize={6}/> : <ViewIcon  boxSize={6}/>} </Button>
         </InputRightElement></FormLabel>

         </InputGroup>
          <Button mt="2rem" size='md' width={'97%'}  color="white" 
              colorScheme='cyan' type="submit">Login</Button>
        
         </form>

      <LinkRegister >
      <Flex paddingTop={"2rem"} flexDirection={"column"} paddingBottom={"2rem"}>
      Já possui uma conta? 
      <Link as={ReachLink} color= "#00ACC1" textDecoration={"underline"} to='/login' >Faça o Cadastro</Link>
      </Flex>
      </LinkRegister>

      {isLargerThan480 ? '' :  <Image   margin={"auto"}  src= {logo} height={'43px'} width='180px'  marginTop={"2rem"} alt='LOGO'  /> }

     
     
      </Flex>
    

      </Flex>
      </Container>
        
  );
}

export default Register;
