import {  Button, HStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import '../Css/scrollbar.css'

// const buttonListItems = ["Music","Programming","Namaste Javascript","Akshay Saini","Live","History","Sitcoms","Podcasts","Gadgets","Cricket","Ranveer","Movies","Old Songs","yello","kjdklsd","fjkdshf"]



const ButtonList = () => {

  const [buttonListItems,setButtonListItems] = useState([])
  const fetchVideoCategory = async()=>{
    const res = await fetch('https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&hl=en&regionCode=in&key=AIzaSyD5J-yFntgSCvJ7X0Bdw4WHOUXKMvUl_ec')
    const json = await res.json()
    console.log(json)
    setButtonListItems(json.items)
  }

  useEffect(()=>{
  fetchVideoCategory()
  },[])

  const [selectedButton,setSelectedButton]= useState("")
  return (
    
    <HStack w={"100%"} className='scrollbarshow' position={"sticky"}  top={"10vh"} my={"10px"} mx={"20px"} overflowX={"scroll"}   >



      {buttonListItems.map((buttonName,index)=>{
        
        return  <HStack  key={buttonName?.id} > <Button minW={"50px"} mr={"10px"} onClick={()=>{setSelectedButton(buttonName?.snippet?.title)}} 
                 size={"sm"}  fontWeight={"semibold"} bgColor={(selectedButton===buttonName?.snippet?.title)?"black":""} color={(selectedButton===buttonName?.snippet?.title)?"white":""} >{buttonName?.snippet?.title}</Button>  </HStack> })}
      
     
    </HStack>
  )
}

export default ButtonList