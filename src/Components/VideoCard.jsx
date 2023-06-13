import { Box, Image ,HStack, Avatar,Text} from '@chakra-ui/react'
import React from 'react'
import compactFormat from 'cldr-compact-number';

const VideoCard = ({snippet,statistics}) => {
  
  const {channelTitle,thumbnails,title} = snippet
  const ImageUrl = thumbnails.medium.url
  let views =  statistics.viewCount
views=   compactFormat(views, 'en')
  
  
  return (
<Box w={"360px"} h={"310px"}  ml={"0px!important"} cursor={"pointer"}>
    <HStack justifyContent={"center"} mt={"10px"}  >

   
    <Image w={"330px"} transition={"0.1s"}  borderRadius={"10px"} css={":hover{border-radius:0px}"} src={ImageUrl}></Image>
    </HStack>

    <HStack h={"30px"} w={"330px"}  overflow={"hidden"} alignItems={"flex-start"} justifyContent={"flex-start"} my={"5px"} mb={"0px!important"} >
      <Avatar ml={"15px"} size={"sm"} src='https://images.news18.com/ibnlive/uploads/2022/11/dhruv-rathee-16675921764x3.jpg'/>
      <Text mx={"5px"}>{title}</Text>
    </HStack>

    <Box ml={"60px"} my={"0px"}>
        <Text fontSize={"14px"}>{channelTitle}</Text>
        <Text fontSize={"14px"} >{views} views • 1 Month ago</Text>
        
    </Box>
</Box>
  )
}

export default VideoCard