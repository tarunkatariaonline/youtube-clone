import { Box, Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import LiveComment from './LiveComment'
import { useDispatch, useSelector } from 'react-redux'
import { setLiveComment } from '../Redux/Slice/liveChatSlice'
import { useId } from 'react'
import generate from './Helper/NameGenrator'
import sentence from './Helper/SentenceGenrator'
const LiveChat = () => {

    const dispatch = useDispatch()
    const liveComment = useSelector((state)=>state.liveChatReducer.comment)
    // console.log(liveComment)


   
    useEffect(()=>{
      
    const timer = setInterval(()=>{
    
     dispatch(setLiveComment({
        name:generate(),
        text:sentence(),
       

     }))

    },700)

    return ()=>{
   clearInterval(timer)
    }
    },[dispatch])
  return (
    <Stack flexDir={"column-reverse"} pt={"20px"} mt={"10px"} borderTopRadius={"15px"} ml={"30px"} w={"400px"} h={"400px"} bgColor={"#edf5f5"} shadow={"md"} overflowY={"scroll"}>


 
{liveComment.map((comment,id)=>{
   return  <LiveComment key={id}  name ={comment.name} text={comment.text} />
})}
    

  
   

    
    </Stack>
  )
}

export default LiveChat