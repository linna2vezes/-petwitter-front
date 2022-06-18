import {Flex, Image , CircularProgress} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getAllTweets } from "../services/auth";
import CardTweet from "./CardTweet";
import thatsall from "../images/thatsall.png";
import InfiniteScroll from "react-infinite-scroll-component";




function Feed () {

 const [tweet, setTweet] = useState ([]);
 const [skips, setskips] = useState(0);
const [hasmore, sethasmore] = useState(true);

useEffect(() => {
   const request = async () => {
   try {
     
     const response = await getAllTweets(skips)
     if (response.data.length < 10) sethasmore(false)
     skips === 0 ? setTweet(response.data) : setTweet(tweet.concat(response.data));
      } catch (error) {
      console.log("Deu Ruim");
      
      }
    };
    request();
 }, [skips]);

 const fetchData = () => setskips(skips + 10); 

  return (
  <>
<Flex direction={"column"}>

<InfiniteScroll
            dataLength={tweet.length}
            next={fetchData}
            hasMore={hasmore}
            loader={
              <CircularProgress
                isIndeterminate
                color="#00ACC1"
                display={"flex"}
                justifyContent={"center"}
                py={"16px"}
              />
            }
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>
                  {/* mensagem  */}
                <Flex width={"100%"} justify="center" >
   <Image src={thatsall} height="200px" mt="1rem" mb="2rem"  mx={"0.3rem"} alt='Photo'/> 
   
</Flex>
                  
                  
                  </b>
              </p>
            }
          >
   

{tweet.map((el) => <CardTweet 
body={(el.body)} user_id={(el.user_id)} createdAt={(el.createdAt)}/>)}

</InfiniteScroll>

</Flex>

</>
    
   
   )
}

export default Feed;