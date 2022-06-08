
import React, { Fragment } from 'react';
import MenuMobile from '../components/MenuMobile';
import MenuDesktop from '../components/MenuDesktop';
import { Flex } from '@chakra-ui/react';
import TweetsMobile from '../components/TweetsMobile';
import TweetsDesktop from '../components/TweetsDesktop';
import Feed from '../components/Feed';
import list from './list';



function Home() {
//  const [isLargerThan480] = useMediaQuery('(min-width: 480px)')

// const [ pets, setPets] = useState ([]);
  
// useEffect(() => {
//   const request = async () => {
//   try {
//     const response = await listPets();
//     console.log(response.data.pets);
//     setPets(response.data.pets)
//      } catch (error) {
//      console.log("Deu Ruim");
//      }
//    };
//   request();
// }, []);

  return (
    <Fragment>
    <Flex direction={["column", "row"]}>

      <Flex display={["flex", "none"]}>
       <MenuMobile />
       <TweetsMobile />
       </Flex>
       
       <Flex display={["none", "flex"]}>
       <MenuDesktop />
       <TweetsDesktop />
       </Flex>
       <Flex>
       {list.map((el) => <Feed  image={el.image} name={el.name} usermane={el.usermane} tweet={el.tweet} />)}
       </Flex>   
       </Flex>
       
       </Fragment>
  )
}




export default Home;
