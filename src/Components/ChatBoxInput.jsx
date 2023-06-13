import { HStack,Text,Input, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setLiveComment } from '../Redux/Slice/liveChatSlice'

const ChatBoxInput = () => {
  const [chatContent,setChatContent] = useState("")
  const dispatch = useDispatch()
  return (
    <form onSubmit={(e)=>{
       e.preventDefault()
       dispatch(setLiveComment({
        name:"tarun",
        text:[chatContent]
       }))
       setChatContent("")
       console.log("form submited")
    }}>
  <HStack ml={"20px"} justifyContent={"center"}  h={"50px"}> <Input onChange={(e)=>{
   setChatContent(e.target.value)
  }} value={chatContent} h={"30px"} shadow={"base"}  placeholder='enter comment here' /> <Button type="submit" size={"sm"} colorScheme={"pink"}>Send</Button> </HStack>
  
  </form>
  )
  
}

export default ChatBoxInput