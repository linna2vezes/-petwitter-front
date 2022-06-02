import { Flex, Stack, Image, Input, InputGroup,InputRightElement, Button, Link, useMediaQuery, Container, FormLabel  } from "@chakra-ui/react";
import { useLocation, useNavigate, Link as ReachLink } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import dogFront from '../images/dogFront.png'
import logoWhite from '../images/logoWhite.png'
import logo from '../images/logo.png'
import logoBlue from '../images/logoBlue.png'
import dogFrontDesktop from '../images/dogFrontDesktop.png'
import logoWhiteDesktop from '../images/logoWhiteDesktop.png'
import { LoginTitle, HeadingTitle, LinkRegister} from "../styled";
import React from 'react';
import { ViewIcon , ViewOffIcon } from '@chakra-ui/icons'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'

// The default icon size is 1em (16px)





function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { signin } = useAuth();
  const [isLargerThan480] = useMediaQuery('(min-width: 480px)')

  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  
  const from = location.state?.from?.pathname || "/";
 
  const onSubmit =  async  (data) =>{
    try {
   const { email, password} = data
    
    await signin({ email, password });
    navigate(from, { replace: true });
      
    } catch (error) {
      console.log(error)
    } 
  }

  const schema = yup.object({
    email: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  }).required();

  const { register, handleSubmit, formState: { errors }, } = useForm({ resolver: yupResolver(schema), });

  return (

   <Container maxW='1280px' p={0} marginLeft= {0} >
    <Flex direction={['column', 'row']}  paddingBottom={['4rem', 0]}>
     {/* --------------------imagem background */}

      <Stack  color={'white'}  bgImage={[dogFront,dogFrontDesktop]} bgRepeat='no-repeat' bgSize={'cover'} bgPosition={"center"}
      height={['262px', '100vh']}  display={'flex'} gap={"2rem"} paddingLeft={"2rem"} justify={'center'}
       paddingTop={"4rem"} flexDirection={"column"} Width ={'100%'} maxW={['','768px']}
      minW={['','768px']}>
        
      
     {!isLargerThan480?  <>
      <Image   boxSize='50px' src= {logoWhite}   alt='LOGO'  />
      <HeadingTitle>
       Comece agora. <br/>
       Conecte-se já.
      </HeadingTitle>
      </> : <Image width={'418px'} justify={'center'} alignSelf='center' src= {logoWhiteDesktop}  alt='LOGO'  />}

    </Stack>
         {/* --------------------imagem background */}
         

    <Flex  marginTop={["1rem", 0]} display={'flex'} p={'2rem'}  alignContent={'center'} pt={0}  justifyContent="center" flexDirection={"column"} 
    Width ={'100%'} maxW={['','512px']}  minW={['','500px']} >

    {!isLargerThan480?  ''  : <><Flex color={'#00ACC1'} display={'flex'} flexDirection={'column'} marginLeft={'0'}><Image width={'76px'}  src= {logoBlue}  alt='LOGO'  />
    <HeadingTitle >    Comece agora.<br />Conecte-se já!</HeadingTitle> </Flex>
     </>}
    
    <LoginTitle >
    Login
    </LoginTitle>
     
         <form onSubmit={handleSubmit(onSubmit)} >
       
          <InputGroup  focusBorderColor='#00ACC1'  flexDirection={"column"} bgcolor={"white"} size='md' gap={"7px"}>
         
          <FormLabel>    Email      
          <Input variant="outline" width={'100%'}  placeholder='E-mail' size='md' {...register("email")} />
              {errors.email && <span>{errors.email.message}</span>} </FormLabel>
          
          <FormLabel>      Senha 
          <Input   width={'100%'} variant="outline"  bg={"white"}    
          placeholder='Senha' 
            type={show ? 'text' : 'password'} {...register("password")}/>
     
         <InputRightElement  paddingTop={"7.7rem"}  width='6.3rem'>
          <Button  h='1.75rem' size='lg' bg='none' onClick={handleClick}>
          {show ? <ViewOffIcon boxSize={6}/> : <ViewIcon  boxSize={6}/>} </Button>
         </InputRightElement>{errors.password && <span>{errors.password.message}</span>} </FormLabel>

         </InputGroup>
          <Button mt="2rem" size='md' width={'97%'}  color="white" 
              colorScheme='cyan' type="submit">Login</Button>
        
         </form>

      <LinkRegister >
      <Flex paddingTop={"2rem"} flexDirection={"column"} paddingBottom={"2rem"}>
      Ainda não possui uma conta? 
      <Link as={ReachLink} color= "#00ACC1" textDecoration={"underline"} to='/signup' >Cadastrar-se</Link>
      </Flex>
      </LinkRegister>

      {isLargerThan480 ? '' :  <Image   margin={"auto"}  src= {logo} height={'43px'} width='180px'  marginTop={"2rem"} alt='LOGO'  /> }

     
     
      </Flex>
    

      </Flex>
      </Container>
        
  );
}

export default Login;
