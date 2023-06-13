import {  Button, HStack, Image, Input,Text,Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {AiOutlineBell, AiOutlineMenu,AiOutlineSearch,} from 'react-icons/ai'
import youtubeLogo from '../Images/youtube-logo-png-transparent-image-5.png'
import {MdAccountCircle, MdVideoCall} from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { setSidebar } from '../Redux/Slice/showSidebarSlice'
import { YOUTUBE_SUGGESTION_API } from '../utils'
import { useSelector } from 'react-redux'
import { setCache } from '../Redux/Slice/suggestionSlice'


const Header = () => {

    const suggestionCache = useSelector((state)=>state.suggestionReducer)
    //  console.log(suggestionCache)
    const [showSearch,setShowSearch] = useState(false)
    const dispatch = useDispatch()
    const [keyword,setKeyword] = useState("")
    const [suggestion,setSuggestion]= useState([])
   
 
   
    useEffect(()=>{
        const fetchSuggestion= async()=>{
            const res = await fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="+keyword)
            const json = await res.json()
            
            setSuggestion(json[1])
            dispatch(setCache({
              [keyword]:(json[1])
            }))
          
            }
        
   const suggestionApiTimer=  setTimeout(()=>{

       if(suggestionCache[keyword]){
          setSuggestion(suggestionCache[keyword])
       }else{
        fetchSuggestion() 
      
       }
     },200)   

     return ()=>{
        clearTimeout(suggestionApiTimer)
     }
    },[keyword])
  return (
 <HStack  zIndex={"4"} bgColor={"white"} h={["10vh"]}paddingTop={"0px"} justifyContent={"space-between"} position={"sticky"} top={"0"} >

    {/* menu slider icon and youtube logo */}
<HStack>
    <Button  onClick={()=>{
        dispatch(setSidebar(true))
    }} color={"black"} size={"md"} colorScheme='none' marginX={"10px"} css={":hover{background-color:#d7d8db}"} padding={"3px"} borderRadius={"50%"}>  <AiOutlineMenu fontSize={"20px"}  /> </Button>
    <Image src={youtubeLogo} w={"100px"}     />

    </HStack>

    {/*  search bar */}

    <HStack w={"50%"} >
    <HStack w={"100%"} border={(!showSearch)?"1px solid #4e4a4f":"1px solid blue"} h={"40px"} borderLeftRadius={"50px"} m={"0px!important"} onFocus={()=>{
        setShowSearch(true)
    }} onBlur={()=>{

     setTimeout(()=>{
        setShowSearch(false)
      },180)

      
    
    }}>
    {(showSearch)?<Button  color={"black"} size={"sm"} mr={"0px"} colorScheme='none' > <AiOutlineSearch fontSize={"20px"}  /> </Button>:""}
    <Input value={keyword}  onChange={(e)=>{
      setKeyword(e.target.value)
    }} placeholder='Search Items Here' variant={"unstyled"} w={"100%"} ml={"5px"} />
    </HStack >
    
    <Button  color={"black"} size={"sm"} m={"-8px!important"} padding={"0px"}  h={"40px"} w={"50px"} borderRightRadius={"50px"} border={"1px solid #4e4a4f"}  borderLeft={"0px"}> <AiOutlineSearch  fontSize={"22px"}  /> </Button>
    </HStack>


 {/*Account Icon and Video upload icon*/}

<HStack  mr={"20px"}>

<Button  color={"black"} size={"md"} colorScheme='none'  css={":hover{background-color:#d7d8db}"} padding={"2px"} borderRadius={"50%"}>  <MdVideoCall fontSize={"24px"}  /> </Button>
<Button  color={"black"} size={"md"} colorScheme='none'  css={":hover{background-color:#d7d8db}"} padding={"2px"} borderRadius={"50%"}>  <AiOutlineBell fontSize={"24px"}  /> </Button>
<Button  color={"black"} size={"md"} colorScheme='none'  css={":hover{background-color:#d7d8db}"} padding={"2px"} borderRadius={"50%"}>  <MdAccountCircle fontSize={"26px"}  /> </Button>
</HStack>


 {(showSearch && keyword.length!==0)?<HStack  position={"fixed"} alignItems={"flex-start"}
top={"8vh"} w={["90%","550px"]}  shadow={(suggestion.length!==0)?"dark-lg":""} borderRadius={"10px"} bgColor={"white"} left={"50%"} right={"50%"} transform={"translatex(-50%)"} >
  
  <Box w={"100%"} mt={suggestion.length?("15px"):"0px"} mb={suggestion.length?("15px"):"0px"}>

  
   {(suggestion)? suggestion.map((suggest)=>{
 return <HStack  key={suggest} onClick={()=>{
   setKeyword(suggest)
 }}  w={"100%"} h={"35px"}  css={":hover{background-color:#f5f5f5}"}   borderRadius={"6px"} cursor={"pointer"}  >  <HStack w={"100%"} ml={"15px"}> <AiOutlineSearch fontSize={"20px"}/>  <Text ml={"5px"}>{suggest} </Text> </HStack></HStack>
   }):""}
 
  
  
  </Box>

  
  
</HStack>:""}


 </HStack>
  )
}

export default Header