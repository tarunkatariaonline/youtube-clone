import { Avatar, HStack,Text ,Box} from '@chakra-ui/react'
import React from 'react'


const LiveComment = (props) => {
    // console.log(props.name)
  return (
    <HStack borderRadius={"3px"} mt={"-10px"} mb={"5px"} bgColor={"#d0dbdb"} alignItems={"flex-start"} w={"full"}  > <Avatar name={props.name} size={"xs"} ml={"5px"} mt={"10px"} mb={"10px"}/> <Text fontWeight={"semibold"} mt={"10px"} mb={"10px"} >{props.name}</Text> <Box mt={"10px"} w={"230px"}  > <Text>{props.text}</Text> </Box>  </HStack>
  )
}

export default LiveComment