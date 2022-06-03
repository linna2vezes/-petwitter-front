import React, { Fragment } from 'react';


// import Tweets from '../components/Tweets';
// import Menu from '../components/Menu';
import MenuMobile from '../components/MenuMobile';
import MenuDesktop from '../components/MenuDesktop';
import { Flex } from '@chakra-ui/react';

function Profile() {

  return (
    <Fragment>
      <Flex direction={["column", "row"]}>
      <Flex display={["flex", "none"]}>
       <MenuMobile />
       </Flex>
       <Flex display={["none", "flex"]}>
       <MenuDesktop />

       </Flex>
       </Flex>
        
    </Fragment>
    )
}




export default Profile;
