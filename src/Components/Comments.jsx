import { Avatar, Box, HStack, Text } from '@chakra-ui/react'
import React from 'react'

const Comments = ({comment}) => {
  //  console.log(comment)
  return (

<Box>
<HStack w={"100%"} minH={"90px"} mt={"10px"} bgColor={"#e8e8e8"} shadow={"sm"} borderRadius={"5px"}>
<Avatar ml={"10px"} name={comment?.name} size={"md"}/>

<Box mt={"10px"} mb={"10px"}>
    <Text fontSize={"16px"} fontWeight={"bold"}>{comment?.name}</Text>
    <Text>{comment?.text}
      </Text>
</Box>
</HStack>
<Box ml={"20px"}  borderLeft={"1px solid black"} pl={"20px"}>


{(comment?.replies?.length!==0)?comment?.replies?.map((comm,index)=>{
    return <Comments key={index} comment={comm}/>
}):""}
</Box>
</Box>
  )
}

export default Comments