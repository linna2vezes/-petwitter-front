import {Flex, Image} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getAllTweets } from "../services/auth";
import CardTweet from "./CardTweet";
import thatsall from "../images/thatsall.png"




function Feed () {

 const [tweet, setTweet] = useState ([]);
//  const [skip, setSkip] = useState (10)
  
useEffect(() => {
   const request = async () => {
   try {
     
     const response = await getAllTweets()
     setTweet(response.data)
      } catch (error) {
      console.log("Deu Ruim");
      
      }
    };
    request();
 }, []);

  

  return (
  <>
<Flex direction={"column"}>
   

{tweet.map((el) => <CardTweet 
body={(el.body)} user_id={(el.user_id)} createdAt={(el.createdAt)}/>)}



</Flex>
<Flex width={"100%"} justify="center" >
   <Image src={thatsall} height="200px" mt="1rem" mb="2rem"  mx={"0.3rem"} alt='Photo'/> 
</Flex>
</>
    
   
   )
}

export default Feed;