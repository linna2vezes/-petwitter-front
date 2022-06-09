import { Flex } from "@chakra-ui/react";
import { useEffect , useState} from "react";
import { useAuth } from "../context/auth-context";
import { getUserTweet } from "../services/auth";
import CardTweet from "./CardTweet";

const ProfileCard = () => {

const {user} = useAuth()
const [ userTweet, setUserTweet]= useState ([]);

useEffect(() => {
    const request = async () =>{
     try {
    const response = await getUserTweet(user.id);
    setUserTweet (response.data);
} catch (error) {
   alert("deu ruim");
 }
}
request();
}, [user.id])

return (
    <>
    
    <Flex  paddingTop={"1rem"} direction={'column'} position="relative"  borderBottom={'1 px solid #EEEEEE'}  width={"100%"}>
    {userTweet.map((el) => <CardTweet 
    body={(el.body)} user_id={(el.user_id)} createdAt={(el.createdAt)}/>)}
    
    
    
    </Flex>
    </>

)

}

export default ProfileCard;