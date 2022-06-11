import { Flex, Image, Text} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import photoProfile from "../images/photoProfile.jpg"
import { getUser } from "../services/auth";
import { Link as ReachLink } from "react-router-dom";
import TimeAgo from "react-timeago";
import portStrings from 'react-timeago/lib/language-strings/pt-br'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'

const formatter = buildFormatter(portStrings)




const CardTweet =({body, createdAt, user_id}) => {

const [user, setUser] = useState ()

    useEffect(() => {
        const request = async () => {
        try {
          const response = await getUser(user_id)
          setUser(response.data)
           } catch (error) {
           console.log("Deu Ruim");
                }
         };
         request();
      }, [user_id]);

      console.log(user?.name);

return(

   
   <Flex padding={"1rem"} direction={'row'}   borderBottom={'1px solid #EEEEEE'}  
    minHeight="90px" gap="1rem" maxWidth="784px">
      <Flex justifyContent={"flex-start"}>
   <Image bt="0" bl="0" borderRadius='full' alignSelf={"flex-start"} boxSize='40px'
            src={photoProfile}   alt='Photo'/>
           </Flex>
           <Flex flexDirection={"column"}>
              <Flex flexDirection={"row"}  gap={"0.4rem"}> 
              <Text fontWeight={"700"} lineHeight="30px" fontSize="14px" >{user?.name}</Text> 
              <Text fontWeight={"400"} lineHeight="30px" color="#828282" fontSize="12px" as={ReachLink} to={`profile/${user_id}`} >@{user?.username}</Text> 
              <Text fontWeight={"400"} lineHeight="30px" color="#828282" fontSize="12px" > <TimeAgo date={Date.parse(createdAt)} formatter={formatter} />    </Text> 
              </Flex>
              <Flex flexDirection={"column"}> 
              <Flex maxWidth={"100%"}>{body}</Flex>
               </Flex>
              </Flex>
           
   
   </Flex> 
)
}

export default CardTweet;