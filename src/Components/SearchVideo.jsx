import { Box,Image,Stack,HStack,Text } from '@chakra-ui/react'
import React from 'react'

const SearchVideo = (props) => {
   const thumbnail = props.thumbnail.url
   const title = props.title
   const channelName = props.channelTitle
   const desc = props.desc
   
  return (
    <Box w={"100%"}>
        <Stack h={["300px","250px"]} flexDir={["column","row"]}  alignItems={"center"}  >
      
      <HStack mx={"20px"}  w={"340px"} borderRadius={"10px"}  h={"200px"} bgColor={"blue"} >
      <Image w={"340px"} borderRadius={"10px"}  h={"200px"} src={thumbnail}/>
      </HStack>
  
      <Box w={["90%","70%"]}  ml={"20px"} display={["flex","block"]} flexDirection={"column"} justifyContent={"flex-start"}  >
          <Text fontSize={["15","22px"]} >{title}</Text>
      
          <Text>{channelName}</Text>
          <Text display={["none","block"]} w={"70%"} h={"22px"} overflow={"hidden"}>{desc}</Text>
          
      </Box>
         
      </Stack>

    </Box>
  )
}

export default SearchVideo