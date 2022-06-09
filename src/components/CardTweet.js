import { Flex, Image, Text} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import photoProfile from "../images/photoProfile.jpg"
import { getUser } from "../services/auth";



const CardTweet =({body, createdAt, user_id}) => {

const [user, setUser] = useState ( )

    useEffect(() => {
        const response = async () => {
        try {
          const response = await getUser(user_id)
          setUser(response.data)
           } catch (error) {
           console.log("Deu Ruim");
                }
         };
        response();
      }, [user_id]);

      console.log(user?.name);

return(


   <Flex padding={"1rem"} direction={'row'}   borderBottom={'1px solid #EEEEEE'}  
    minHeight="90px" gap="1rem" maxWidth="784px">
      <Flex justifyContent={"flex-start"}>
   <Image margin={"auto"}  borderRadius='full' alignSelf={"flex-start"} boxSize='40px'
            src={photoProfile}   alt='Photo'/>
           </Flex>
              <Flex flexDirection={"row"}> 
              <Text>{user?.name}</Text> 
              <Link to="/profile">@{user?.username}</Link> 
              </Flex>
              <Flex flexDirection={"column"}> 
              <Flex>{body}</Flex>
              <Flex>created at {createdAt}</Flex>
              </Flex>
           
   
   </Flex> 
)
}

export default CardTweet;