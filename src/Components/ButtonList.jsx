import {  Button, HStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const buttonListItems = ["Music","Programming","Namaste Javascript","Akshay Saini","Live","History","Sitcoms","Podcasts","Gadgets","Cricket","Ranveer","Movies","Old Songs","yello","kjdklsd","fjkdshf"]

const ButtonList = () => {

  const [selectedButton,setSelectedButton]= useState("")
  return (
    
    <HStack w={"100%"} position={"sticky"}  top={"10vh"} my={"10px"} mx={"10px"} overflow={"hidden"}   >

      {buttonListItems.map((buttonName,index)=>{
        
        return  <HStack  key={index} > <Button minW={"50px"} onClick={()=>{setSelectedButton(buttonName)}} 
                 size={"sm"}  fontWeight={"semibold"} bgColor={(selectedButton===buttonName)?"black":""} color={(selectedButton===buttonName)?"white":""} >{buttonName}</Button>  </HStack> })}
      
        
    </HStack>
  )
}

export default ButtonList