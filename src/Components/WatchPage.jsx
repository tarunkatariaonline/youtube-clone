import { Box, HStack } from '@chakra-ui/react'
import React from 'react'
import { useSearchParams } from "react-router-dom";
import CommentSection from './CommentSection';
import LiveChat from './LiveChat';
import ChatBoxInput from './ChatBoxInput';


const WatchPage = () => {

    let [searchParams] = useSearchParams();
    const videoParameter= searchParams.get("v")
  return (

<Box w={"100%"}  >


<HStack>
  <HStack ml={"60px"} mt={"10px"} w={"60%"} h={"400px"} >
<iframe width={"100%"} height={"100%"} 
src={"https://www.youtube.com/embed/"+videoParameter} title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
 web-share"  allowFullScreen></iframe>


  </HStack>

<Box >
<LiveChat/>
<ChatBoxInput/>
</Box>
  </HStack>

  <HStack ml={"60px"}>
  <CommentSection />

  </HStack>
  
  </Box>
  )
}

export default WatchPage