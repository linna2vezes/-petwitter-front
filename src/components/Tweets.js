import { Flex, Image } from "@chakra-ui/react";
import photoProfile from "../images/photoProfile.jpg"



function Tweets() {


  
  return (
   <>
   <Flex display={"flex"} flexDirection={"row"}>
   <Image  margin={"auto"} marginBottom={"2rem"} marginTop={"2rem"} borderRadius='full'  boxSize='100px'
            src={photoProfile}    alt='Photo'/>
            <Flex display={"flex"} flexDirection={"column"}>
              <Flex> {name} + @{username} +at</Flex>
              <Flex>Post</Flex>
            </Flex>


   </Flex>
   </>
  );
}

export default Tweets;