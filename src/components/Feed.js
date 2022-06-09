import {Flex} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getAllTweets } from "../services/auth";
import CardTweet from "./CardTweet";




function Feed () {

 const [tweet, setTweet] = useState ([]);
  
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
</>
    
   
   )
}

export default Feed;