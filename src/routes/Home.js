
import React, { Fragment } from 'react';
import MenuMobile from '../components/MenuMobile';
import MenuDesktop from '../components/MenuDesktop';
import { Flex } from '@chakra-ui/react';
import TweetsMobile from '../components/TweetsMobile';
import TweetsDesktop from '../components/TweetsDesktop';
import Feed from '../components/Feed';



function Home() {
//  const [isLargerThan480] = useMediaQuery('(min-width: 480px)')


  return (
    <Fragment>
    <Flex direction={["column", "row"]} >

      <Flex display={["flex", "none"]}>
      <Flex direction={"column"} width={"100%"}maxWidth={"480px"} >
       <MenuMobile />
        <TweetsMobile />
        <Feed />
       </Flex>
       </Flex>
       
       <Flex display={["none", "flex"]}   borderRight={'1px solid #EEEEEE'}  >
       <MenuDesktop />
       <Flex direction={"column"} >
       <TweetsDesktop />
           <Feed />
       </Flex> 
       </Flex>
         
       </Flex>
       
       </Fragment>
  )
}




export default Home;
