import { HStack ,Box,Button, Text} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ButtonList from './ButtonList'
import VideoCard from './VideoCard'
import { MdHome, MdSubscriptions, MdVideoLibrary } from 'react-icons/md'
import { YOUTUBE_VIDEO_API } from '../utils'
import {Link} from 'react-router-dom'

const Home = () => {
  const [videos,setVideos] = useState([])
  const fetchVideos = async()=>{
    const res = await fetch(YOUTUBE_VIDEO_API)
    const json = await res.json()
    
    setVideos(json?.items)
  }

 useEffect(()=>{
  fetchVideos()
 },[])
  return (
    <HStack  w={"100%"} alignItems={"flex-start"}>
      <Box w={"90px"}  h={"90vh"} position={"sticky"} top={"10vh"} display={["none","block"]}  >
      
<Button bgColor={"white"}  py={"30px"} mx={"5px"} mt={"10px"} >   <Box my={"10px"} display={"flex"} justifyContent={"center"} flexDirection={"column"} alignItems={"center"} > <MdHome fontSize={"22px"} />  <Text fontSize={"10px"}> Home</Text>  </Box></Button>   
<Button bgColor={"white"}  py={"30px"} mx={"5px"} mt={"10px"} >   <Box my={"10px"} display={"flex"} justifyContent={"center"} flexDirection={"column"} alignItems={"center"} > <MdVideoLibrary fontSize={"22px"} /> <Text fontSize={"10px"}> Library</Text> </Box></Button>   
<Button bgColor={"white"}  py={"30px"} px={"5px"} mx={"5px"} mt={"10px"} >   <Box my={"10px"} display={"flex"} justifyContent={"center"} flexDirection={"column"} alignItems={"center"} > <MdSubscriptions fontSize={"22px"} /> <Text fontSize={"10px"} mx={"0px"}> Subscription</Text>  </Box></Button>   
      </Box>

<HStack w={"100%"}  justifyContent={"center"} overflowX={"hidden"}   >
<HStack w={"99%"}   alignItems={"flex-start"}  >
<Box w={"100%"} overflowX={"hidden"}  >
<Box w={"100%"} overflowX={"hidden"}   bgColor={"white"}  position={"fixed"} top={"10vh"} zIndex={"3"}  >
  <ButtonList/>
  </Box>


  <HStack w={"100%"} overflowY={"hidden"}  flexWrap={"wrap"} justifyContent={"center"} zIndex={"1"} mt={"10vh"} >
   { (videos.length!==0)?videos.map((video)=>{
      return <Link to={'/watch?v='+video.id} key={video.id}> <VideoCard  {...video}/></Link>
    }):""}
   
  
  </HStack>
</Box>


</HStack>
</HStack>
    </HStack>
  )
}

export default Home