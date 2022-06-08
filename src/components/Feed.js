import {Flex, Image} from "@chakra-ui/react";




function Feed( props) {
const {image, name, username,tweet} = props

  
  return (
   <>
   <Flex display={"flex"} flexDirection={"row"}>
   <Image  margin={"auto"} marginBottom={"2rem"} marginTop={"2rem"} borderRadius='full'  boxSize='100px'
            src={image}    alt='Photo'/>
            <Flex display={"flex"} flexDirection={"column"}>
              <Flex> <p>{name} + @{username} </p></Flex>
              <Flex><p>{tweet}</p></Flex>
            </Flex> 
   



   </Flex>
   </>
  );
}

export default Feed;