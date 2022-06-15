import { Flex, Image, Text,  } from "@chakra-ui/react";
import { useEffect , useState} from "react";
import { useAuth } from "../context/auth-context";
import { getUserTweet , getUser } from "../services/auth";
import CardTweet from "./CardTweet";
import photoProfile from "../images/photoProfile.jpg"
import { useParams } from "react-router-dom";


const ProfileCard = ({body, createdAt, username}) => {


const {user} = useAuth()
const {id , user_id} = useParams()
const [userTweet, setUserTweet]= useState ([]);
const [userdata, setuser] = useState();


useEffect(() => {
    const request = async () =>{
     try {
    const response = await getUserTweet(user_id ? user_id : id);
    // console.log(id);
    setUserTweet (response.data);
    
} catch (error) {
   alert("deu ruim");
 }
}
request()
// user_id ? request(user_id) : request(id);
}, [ id, user_id])



useEffect(() => {
  const request = async () => {
    try {
      const response = await getUser(id);
      setuser(response.data);
      console.log(response.data);

    } catch (error) {
      console.log(error.message);
      console.log("okok");

    }
  };
 request();
}, [id]);

console.log(userdata);

return (
    <>
    <Flex direction={"column"}  borderBottom={'1px solid #EEEEEE'}>
     <Flex  mt="20px" mb="0px" direction={'row'}     
    minHeight="70px" gap="1.5rem" maxWidth="784px" marginBottom={"0"}>
      <Flex direction={'row'}   ></Flex>
      <Flex justifyContent={"flex-start"}>
   <Image bt="0" ml="0" bl="0" borderRadius='full' alignSelf={"flex-start"} boxSize='73px'
            src={photoProfile}   alt='Photo'/>
           </Flex>
           
              <Flex flexDirection={"column"} > 
              <Text fontWeight={"700"} pt="3px" fontSize="22px" lineHeight={"35px"}>{ userdata ?  userdata.name : user.name }</Text> 
              <Text fontWeight={"400"} mt="0" fontSize="16px" lineHeight={"22px"} color="#828282"  >@{ userdata ?  userdata.username : user.username }</Text> 
              
              
              </Flex>

   </Flex>
   <Flex ml="1.3rem"  b="0" width={"80px"} justify="center" height="30px" mt="10px" fontWeight={"600"}  
    borderBottom={'2px solid #00ACC1'} mb="0" p="0" > PetPosts</Flex>


   </Flex>
    
    <Flex  paddingTop={"1rem"} direction={'column'}   borderBottom={'1 px solid #EEEEEE'}  width={"100%"}>
    {userTweet.map((el) => <CardTweet 
    body={(el.body)} user_id={(el.user_id )} createdAt={(el.createdAt)}
    
    />)}
    
    
    
    </Flex>
    </>

)
}


export default ProfileCard;