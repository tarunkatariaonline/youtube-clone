import React, { useState } from 'react'
import { Box ,Button,HStack,Image,Text,Divider} from '@chakra-ui/react'
import { AiFillHome ,AiFillLike,AiFillPlayCircle,AiOutlineMenu, AiOutlinePlaySquare} from 'react-icons/ai'
import '../Css/sidebar.css'
import youtubeLogo from '../Images/youtube-logo-png-transparent-image-5.png'
import { useDispatch, useSelector } from 'react-redux'
import { setSidebar } from '../Redux/Slice/showSidebarSlice'
import { MdHistory, MdSubscriptions,MdVideoLibrary,MdWatchLater } from 'react-icons/md'


const menuListOne = [
    {
      name:"Home",
      icon:<AiFillHome fontSize={"20px"}/>,
      id:1
    },
    {
        name:"Shorts",
        icon:<AiFillPlayCircle fontSize={"20px"}/>,
        id:2
      },
      {
        name:"Subscriptions",
        icon:<MdSubscriptions fontSize={"20px"}/>,
        id:3
      }

]

const menuListSecond = [
    {
      name:"Library",
      icon:<MdVideoLibrary fontSize={"20px"}/>,
      id:4
    },
    {
        name:"History",
        icon:<MdHistory fontSize={"24px"}/>,
        id:5
      },
      {
        name:"Your Videos",
        icon:<AiOutlinePlaySquare fontSize={"20px"}/>,
        id:6
      },
      {
        name:"Watch later",
        icon:<MdWatchLater fontSize={"20px"}/>,
        id:7
      },

      {
        name:"Liked Videos",
        icon:<AiFillLike fontSize={"20px"}/>,
        id:8
      },
      
      


]



const Sidebar = () => {
    const [selectedMenuItem,setSelectedMenuItem] = useState("Home")
    const dispatch = useDispatch()
   const sidebarToggle = useSelector(state=>state.showSidebarReducer.value)  
 
  return (
  
   <Box w={"240px"} zIndex={"5"} className={(sidebarToggle)?"sidebar active":"sidebar"}  bgColor={"white"} h={"100vh"} position={"fixed"} top={"0"}    >

<HStack justifyContent={"flex-start"} h={"10vh"} mx={"10px"}  >
    <Button  onClick={()=>{
        dispatch(setSidebar(false))
        
    }} color={"black"} size={"md"}  colorScheme='none'   css={":hover{background-color:#d7d8db}"} padding={"3px"} borderRadius={"50%"}>  <AiOutlineMenu fontSize={"20px"}  /> </Button>
    <Image src={youtubeLogo} w={"100px"}  mx={"-3px"}  />

    </HStack>

{/* itrating menu list one and second*/ }

{menuListOne.map((menuItem)=>{
    return <HStack key={menuItem.id}  w={"88%"}  ml={"7px"} my={"5px"} >
    <Button onClick={()=>{
        setSelectedMenuItem(menuItem.name)
    }} w={"full"} justifyContent={"flex-start"} bgColor={(selectedMenuItem===menuItem.name)?"#dae3e6":"white"}> {menuItem.icon}  <Text mx={"20px"}>{menuItem.name}</Text>  </Button>
   </HStack>   

  
   
})}
 <Divider color={"black"} my={"10px"} />

{menuListSecond.map((menuItem)=>{
    return <HStack  key={menuItem.id} w={"88%"}  ml={"7px"} my={"5px"}>
    <Button onClick={()=>{
        setSelectedMenuItem(menuItem.name)
    }} w={"full"} justifyContent={"flex-start"} bgColor={(selectedMenuItem===menuItem.name)?"#dae3e6":"white"}> {menuItem.icon}  <Text mx={"20px"}>{menuItem.name}</Text>  </Button>
   </HStack>   
})}
   
      
  </Box>
 
  )
}

export default Sidebar