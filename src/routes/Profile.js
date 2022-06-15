import React, { Fragment } from 'react';
import MenuMobile from '../components/MenuMobile';
import MenuDesktop from '../components/MenuDesktop';
import { Flex } from '@chakra-ui/react';
import ProfileCard from '../components/ProfileCard';


function Profile() {

  return (
    <Fragment>
      <Flex direction={["column", "row"]}>

      <Flex display={["flex", "none"]}>
      <Flex direction={"column"} width={"100%"} maxWidth={"480px"} >
       <MenuMobile />
       <ProfileCard />
       </Flex>
       </Flex>

       <Flex display={["none", "flex"]}   borderRight={'1px solid #EEEEEE'}  >
       <MenuDesktop />
       <Flex pt="2" direction={"column"} minWidth="600px" width={"100%"} >
       <ProfileCard />
       </Flex> 
       </Flex>
       </Flex>
        
    </Fragment>
    )
}




export default Profile;
