import { Avatar, Box, Button, HStack,Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom";
import CommentSection from './CommentSection';
import LiveChat from './LiveChat';
import ChatBoxInput from './ChatBoxInput';
import { Text } from '@chakra-ui/react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

import compactFormat from 'cldr-compact-number';

const WatchPage = () => {


    let [searchParams] = useSearchParams();
    const [videoDetail,setVideoDetail] = useState(null)
    const videoParameter= searchParams.get("v")


    const fetchVideoDetails=async()=>{
   const res = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoParameter}&key=AIzaSyD5J-yFntgSCvJ7X0Bdw4WHOUXKMvUl_ec`)
   const json = await res.json()
   console.log( "json data",json)
   setVideoDetail(json.items[0])
    }
    useEffect(()=>{
    fetchVideoDetails()
    },[])
  return (

<Box w={"100%"}  >


<Stack flexDir={["column","row"]}>
  <Stack ml={["0px","60px"]} flexDir={"column"} mt={"10px"} w={["100%","60%"]}  >
    <HStack w={"100%"} h={["230px","400px"]}>

<iframe width={"100%"} height={"100%"} 
src={"https://www.youtube.com/embed/"+videoParameter+"?autoplay=1"} title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
 web-share"  allowFullScreen></iframe>

</HStack>
<Accordion   allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' overflow={"hidden"}>
        <Box  overflow={"hidden"} >
        {videoDetail?.snippet?.title}
        </Box>
         <Text mt={"10x"} fontWeight={"semibold"}>
        { compactFormat(videoDetail?.statistics?.viewCount, 'en')} Views
         </Text>
         <HStack mt={"10px"} justifyContent={"space-between"}>  
         <HStack>
          <Avatar   h={"40px"} w={"40px"}  name={videoDetail?.snippet?.channelTitle}/> 

       
         <Text>{videoDetail?.snippet?.channelTitle}</Text>
         </HStack >
        <Button w={"100px"} mx={"20px"} size={["xs","sm"]} py={"18px"} borderRadius={"23px"} bgColor={"black"} fontWeight={"semibold"} fontSize={"12px"} color={"white"}>Subscirbe</Button>

       
         </HStack>
        </Box>
     
      </AccordionButton>
    </h2>

    <AccordionPanel pb={4}>
      <Text>
    {videoDetail?.snippet?.description}
      </Text>
    </AccordionPanel>
    
  </AccordionItem>

 
</Accordion>
  </Stack>

<Box >
<LiveChat/>
<ChatBoxInput/>
</Box>
  </Stack>

  <HStack ml={["10px","60px"]}>
  <CommentSection />

  </HStack>
  
  </Box>
  )
}

export default WatchPage