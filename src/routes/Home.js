
import React, { Fragment } from 'react';


// import Tweets from '../components/Tweets';
// import Menu from '../components/Menu';
import MenuMobile from '../components/MenuMobile';
import MenuDesktop from '../components/MenuDesktop';
import { Flex } from '@chakra-ui/react';
import Tweets from '../components/Tweets';

// import MenuDesktop from '../components/MenuDesktop';
// import { Flex } from '@chakra-ui/react';

function Home() {
//  const [isLargerThan480] = useMediaQuery('(min-width: 480px)')

  return (
    <Fragment>
    <Flex direction={["column", "row"]}>
      <Flex display={["flex", "none"]}>
       <MenuMobile />
       </Flex>
       <Flex display={["none", "flex"]}>
       <MenuDesktop />
       </Flex>
       
             <Tweets />
      
       
       </Flex>
       
       {/* {list.map((el) => <Card image={el.image} name={el.name} price={el.price} />)} */}
       </Fragment>
  )
}




export default Home;
